/**
 * Admin Dashboard - Alpine.js Application Logic
 * Clean, modular, well-commented code for easy customization.
 */

document.addEventListener('alpine:init', () => {
  Alpine.data('dashboardApp', () => ({
    // ==========================================
    // NAVIGATION & VIEW STATE
    // ==========================================
    currentView: 'dashboard', // 'dashboard', 'table', 'form', 'analytics', 'settings'
    
    // Sidebar visibility & collapse states
    // On desktop: can toggle full width vs collapsed mini bar (or hidden)
    // On mobile: slides in and out smoothly as an animated off-canvas drawer
    sidebarOpen: true,       // Controls open/close on both mobile and desktop
    sidebarCollapsed: false,  // Controls compact mini-mode on large screens
    
    // Accordion group states for menu items
    openAccordions: {
      users: true,
      products: false,
      reports: false,
      settings: false,
      auth: false,
    },

    // UI Dropdown states
    notificationsOpen: false,
    profileOpen: false,
    quickActionOpen: false,
    searchModalOpen: false,
    globalSearchQuery: '',
    
    // Dark mode state (persisted in localStorage if available)
    darkMode: false,

    // Theme color palette (default: Royal Indigo)
    currentTheme: 'indigo', // 'indigo', 'emerald', 'sky', 'rose', 'violet', 'amber'
    themeColors: {
      indigo: { name: 'Royal Indigo', primary: '#4f46e5', light: '#eef2ff', text: 'text-indigo-600', bg: 'bg-indigo-600', hover: 'hover:bg-indigo-700', ring: 'focus:ring-indigo-500', badge: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10' },
      emerald: { name: 'Emerald Green', primary: '#059669', light: '#ecfdf5', text: 'text-emerald-600', bg: 'bg-emerald-600', hover: 'hover:bg-emerald-700', ring: 'focus:ring-emerald-500', badge: 'bg-emerald-50 text-emerald-700 ring-emerald-700/10' },
      sky: { name: 'Ocean Blue', primary: '#0284c7', light: '#f0f9ff', text: 'text-sky-600', bg: 'bg-sky-600', hover: 'hover:bg-sky-700', ring: 'focus:ring-sky-500', badge: 'bg-sky-50 text-sky-700 ring-sky-700/10' },
      rose: { name: 'Rose Red', primary: '#e11d48', light: '#fff1f2', text: 'text-rose-600', bg: 'bg-rose-600', hover: 'hover:bg-rose-700', ring: 'focus:ring-rose-500', badge: 'bg-rose-50 text-rose-700 ring-rose-700/10' },
      violet: { name: 'Deep Violet', primary: '#7c3aed', light: '#f5f3ff', text: 'text-violet-600', bg: 'bg-violet-600', hover: 'hover:bg-violet-700', ring: 'focus:ring-violet-500', badge: 'bg-violet-50 text-violet-700 ring-violet-700/10' },
    },

    // Toast notification state
    toast: {
      show: false,
      title: '',
      message: '',
      type: 'success', // 'success', 'error', 'info'
    },

    // Sample notification list
    notifications: [
      { id: 1, title: 'New Order Received', desc: 'Order #4092 placed by Sarah Jenkins', time: '10 min ago', unread: true, icon: 'cart' },
      { id: 2, title: 'Server CPU Warning', desc: 'Cluster 2 usage reached 86%', time: '1 hour ago', unread: true, icon: 'alert' },
      { id: 3, title: 'New User Registered', desc: 'Tariq Al-Mansoor joined the portal', time: '3 hours ago', unread: false, icon: 'user' },
    ],

    // ==========================================
    // DATA TABLE STATE & LOGIC
    // ==========================================
    tableSearch: '',
    statusFilter: 'all',
    roleFilter: 'all',
    sortColumn: 'id',
    sortDirection: 'asc',
    currentPage: 1,
    rowsPerPage: 5,
    selectedRows: [],
    
    // User Edit / Add Modal
    userModalOpen: false,
    modalMode: 'add', // 'add' or 'edit'
    modalFormData: {
      id: null,
      name: '',
      email: '',
      role: 'Member',
      status: 'Active',
      orders: 0,
      spent: '$0.00',
    },

    // Comprehensive Table Data Set
    users: [
      { id: 101, name: 'Md. Imran Hossain', email: 'imran@example.com', role: 'Super Admin', status: 'Active', orders: 48, spent: '$3,420.00', date: '2024-01-15', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
      { id: 102, name: 'Anika Rahman', email: 'anika.r@example.com', role: 'Manager', status: 'Active', orders: 29, spent: '$1,850.50', date: '2024-02-10', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80' },
      { id: 103, name: 'Tanvir Ahmed', email: 'tanvir.dev@example.com', role: 'Developer', status: 'Pending', orders: 12, spent: '$740.00', date: '2024-02-28', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80' },
      { id: 104, name: 'Sadia Islam', email: 'sadia.i@example.com', role: 'Designer', status: 'Active', orders: 34, spent: '$2,190.00', date: '2024-03-05', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80' },
      { id: 105, name: 'Kamal Hasan', email: 'kamal.h@example.com', role: 'Editor', status: 'Inactive', orders: 4, spent: '$180.00', date: '2024-03-12', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80' },
      { id: 106, name: 'Farzana Akter', email: 'farzana.a@example.com', role: 'Support', status: 'Active', orders: 19, spent: '$980.00', date: '2024-03-20', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80' },
      { id: 107, name: 'Naimur Rahman', email: 'naimur@example.com', role: 'Member', status: 'Active', orders: 8, spent: '$410.00', date: '2024-04-02', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80' },
      { id: 108, name: 'Rubina Yasmin', email: 'rubina.y@example.com', role: 'Manager', status: 'Pending', orders: 22, spent: '$1,430.00', date: '2024-04-18', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80' },
      { id: 109, name: 'Zubair Hossain', email: 'zubair.h@example.com', role: 'Developer', status: 'Active', orders: 31, spent: '$2,650.00', date: '2024-05-01', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80' },
      { id: 110, name: 'Tasnim Jahan', email: 'tasnim@example.com', role: 'Member', status: 'Inactive', orders: 2, spent: '$95.00', date: '2024-05-15', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80' },
    ],

    // ==========================================
    // COMPREHENSIVE FORM STATE & LOGIC
    // ==========================================
    form: {
      firstName: 'Imran',
      lastName: 'Hossain',
      email: 'mdimranhossaingd@gmail.com',
      phone: '+880 1712 345678',
      role: 'Administrator',
      department: 'Technology',
      bio: 'Experienced UI/UX designer and web developer crafting seamless digital experiences.',
      website: 'https://example.com',
      birthDate: '1995-06-15',
      workShift: 'morning',
      notificationsEmail: true,
      notificationsSms: false,
      twoFactorAuth: true,
      newsletter: true,
      skills: ['HTML5', 'Tailwind CSS', 'Alpine.js', 'UI Design'],
      salaryExpectation: 85000,
      avatarFile: null,
      avatarPreview: null,
    },
    newTagInput: '',
    formErrors: {},
    isSubmitting: false,

    // ==========================================
    // INITIALIZATION & LIFECYCLE
    // ==========================================
    init() {
      // Restore theme and dark mode from local storage if available
      try {
        const savedDark = localStorage.getItem('admin_dark_mode');
        if (savedDark !== null) {
          this.darkMode = JSON.parse(savedDark);
          this.applyDarkMode();
        }
        const savedTheme = localStorage.getItem('admin_theme');
        if (savedTheme && this.themeColors[savedTheme]) {
          this.currentTheme = savedTheme;
        }
      } catch (e) {
        console.warn('Storage not accessible', e);
      }

      // Responsive screen check on mount
      if (window.innerWidth < 1024) {
        this.sidebarOpen = false; // Closed by default on small screens
      } else {
        this.sidebarOpen = true;  // Open by default on desktop
      }

      // Window resize listener
      window.addEventListener('resize', () => {
        if (window.innerWidth < 1024) {
          this.sidebarCollapsed = false;
        }
      });
    },

    // ==========================================
    // SIDEBAR & NAVIGATION METHODS
    // ==========================================
    toggleSidebar() {
      // Toggle sidebar show/hide smoothly on both mobile and desktop
      this.sidebarOpen = !this.sidebarOpen;
    },

    toggleSidebarCollapse() {
      // On desktop, toggle between full width (260px) and mini-mode (72px)
      this.sidebarCollapsed = !this.sidebarCollapsed;
      if (this.sidebarCollapsed) {
        // close accordions when in mini mode for clean layout
        for (let key in this.openAccordions) {
          this.openAccordions[key] = false;
        }
      }
    },

    toggleAccordion(groupName) {
      if (this.sidebarCollapsed) {
        this.sidebarCollapsed = false;
      }
      this.openAccordions[groupName] = !this.openAccordions[groupName];
    },

    switchView(viewName) {
      this.currentView = viewName;
      // On mobile, auto-close sidebar when a menu item is tapped
      if (window.innerWidth < 1024) {
        this.sidebarOpen = false;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // ==========================================
    // THEME & DARK MODE
    // ==========================================
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.applyDarkMode();
      try {
        localStorage.setItem('admin_dark_mode', JSON.stringify(this.darkMode));
      } catch (e) {}
      this.showToast(this.darkMode ? 'Dark Mode Activated' : 'Light Mode Activated', 'Theme updated successfully');
    },

    applyDarkMode() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    setTheme(themeKey) {
      if (this.themeColors[themeKey]) {
        this.currentTheme = themeKey;
        try {
          localStorage.setItem('admin_theme', themeKey);
        } catch (e) {}
        this.showToast('Color Theme Changed', `Palette switched to ${this.themeColors[themeKey].name}`);
      }
    },

    // ==========================================
    // TOAST NOTIFICATION HELPER
    // ==========================================
    showToast(title, message, type = 'success') {
      this.toast.title = title;
      this.toast.message = message;
      this.toast.type = type;
      this.toast.show = true;
      setTimeout(() => {
        this.toast.show = false;
      }, 4000);
    },

    // ==========================================
    // DATA TABLE COMPUTED HELPERS & ACTIONS
    // ==========================================
    get filteredUsers() {
      return this.users.filter(user => {
        // Search filter
        const query = this.tableSearch.toLowerCase();
        const matchesSearch = !query || 
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query) ||
          user.role.toLowerCase().includes(query) ||
          user.id.toString().includes(query);

        // Status filter
        const matchesStatus = this.statusFilter === 'all' || user.status.toLowerCase() === this.statusFilter.toLowerCase();

        // Role filter
        const matchesRole = this.roleFilter === 'all' || user.role.toLowerCase() === this.roleFilter.toLowerCase();

        return matchesSearch && matchesStatus && matchesRole;
      }).sort((a, b) => {
        let valA = a[this.sortColumn];
        let valB = b[this.sortColumn];

        if (typeof valA === 'string') {
          valA = valA.toLowerCase();
          valB = valB.toLowerCase();
        }

        if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
        if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    },

    get totalPages() {
      return Math.max(1, Math.ceil(this.filteredUsers.length / this.rowsPerPage));
    },

    get paginatedUsers() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      return this.filteredUsers.slice(start, start + this.rowsPerPage);
    },

    get allSelectedOnPage() {
      const pageIds = this.paginatedUsers.map(u => u.id);
      return pageIds.length > 0 && pageIds.every(id => this.selectedRows.includes(id));
    },

    toggleSelectAll() {
      const pageIds = this.paginatedUsers.map(u => u.id);
      if (this.allSelectedOnPage) {
        this.selectedRows = this.selectedRows.filter(id => !pageIds.includes(id));
      } else {
        this.selectedRows = Array.from(new Set([...this.selectedRows, ...pageIds]));
      }
    },

    toggleRowSelection(id) {
      if (this.selectedRows.includes(id)) {
        this.selectedRows = this.selectedRows.filter(rowId => rowId !== id);
      } else {
        this.selectedRows.push(id);
      }
    },

    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    },

    openAddUserModal() {
      this.modalMode = 'add';
      this.modalFormData = {
        id: Math.floor(100 + Math.random() * 900),
        name: '',
        email: '',
        role: 'Member',
        status: 'Active',
        orders: 0,
        spent: '$0.00',
        date: new Date().toISOString().split('T')[0],
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      };
      this.userModalOpen = true;
    },

    openEditUserModal(user) {
      this.modalMode = 'edit';
      this.modalFormData = JSON.parse(JSON.stringify(user));
      this.userModalOpen = true;
    },

    saveUserModal() {
      if (!this.modalFormData.name || !this.modalFormData.email) {
        this.showToast('Validation Error', 'Please fill in both name and email', 'error');
        return;
      }

      if (this.modalMode === 'add') {
        this.users.unshift({ ...this.modalFormData });
        this.showToast('User Created', `${this.modalFormData.name} added successfully.`);
      } else {
        const index = this.users.findIndex(u => u.id === this.modalFormData.id);
        if (index !== -1) {
          this.users[index] = { ...this.modalFormData };
          this.showToast('User Updated', `${this.modalFormData.name} details saved.`);
        }
      }
      this.userModalOpen = false;
    },

    deleteUser(id) {
      const target = this.users.find(u => u.id === id);
      if (confirm(`Are you sure you want to delete ${target ? target.name : 'this user'}?`)) {
        this.users = this.users.filter(u => u.id !== id);
        this.selectedRows = this.selectedRows.filter(rowId => rowId !== id);
        this.showToast('Deleted', 'Record removed from system.');
      }
    },

    bulkDelete() {
      if (!this.selectedRows.length) return;
      if (confirm(`Delete ${this.selectedRows.length} selected items?`)) {
        this.users = this.users.filter(u => !this.selectedRows.includes(u.id));
        const count = this.selectedRows.length;
        this.selectedRows = [];
        this.showToast('Bulk Action Complete', `${count} items deleted.`);
      }
    },

    bulkExport() {
      if (!this.selectedRows.length) return;
      const exportData = this.users.filter(u => this.selectedRows.includes(u.id));
      const csv = 'ID,Name,Email,Role,Status,Orders,Spent\n' + 
        exportData.map(u => `${u.id},"${u.name}","${u.email}",${u.role},${u.status},${u.orders},"${u.spent}"`).join('\n');
      
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.setAttribute('href', url);
      a.setAttribute('download', `users-export-${new Date().toISOString().slice(0,10)}.csv`);
      a.click();
      this.showToast('Export Ready', `Exported ${exportData.length} records to CSV.`);
    },

    // ==========================================
    // FORM METHODS & TAG HANDLERS
    // ==========================================
    addTag() {
      const tag = this.newTagInput.trim();
      if (tag && !this.form.skills.includes(tag)) {
        this.form.skills.push(tag);
        this.newTagInput = '';
      }
    },

    removeTag(index) {
      this.form.skills.splice(index, 1);
    },

    handleFileUpload(event) {
      const file = event.target.files ? event.target.files[0] : null;
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          this.showToast('File Too Large', 'Maximum file size allowed is 2MB', 'error');
          return;
        }
        this.form.avatarFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.form.avatarPreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },

    removeUploadedFile() {
      this.form.avatarFile = null;
      this.form.avatarPreview = null;
    },

    validateForm() {
      this.formErrors = {};
      if (!this.form.firstName.trim()) this.formErrors.firstName = 'First name is required.';
      if (!this.form.lastName.trim()) this.formErrors.lastName = 'Last name is required.';
      if (!this.form.email.trim()) {
        this.formErrors.email = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.formErrors.email = 'Please provide a valid email format.';
      }
      if (!this.form.phone.trim()) this.formErrors.phone = 'Phone number is required.';
      return Object.keys(this.formErrors).length === 0;
    },

    submitForm() {
      if (!this.validateForm()) {
        this.showToast('Form Validation Failed', 'Please correct highlighted errors before submitting.', 'error');
        return;
      }
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        this.showToast('Success!', 'Profile and configuration submitted successfully.');
      }, 750);
    },

    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        role: 'Administrator',
        department: 'Technology',
        bio: '',
        website: '',
        birthDate: '',
        workShift: 'morning',
        notificationsEmail: true,
        notificationsSms: false,
        twoFactorAuth: false,
        newsletter: false,
        skills: ['HTML5', 'Tailwind CSS'],
        salaryExpectation: 60000,
        avatarFile: null,
        avatarPreview: null,
      };
      this.formErrors = {};
      this.showToast('Form Cleared', 'All input fields have been reset.', 'info');
    }
  }));
});
