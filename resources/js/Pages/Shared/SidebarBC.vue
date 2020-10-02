<template>
    <sidebar-menu :menu="menu" :width="width" :collapsed="collapsed" :widthCollapsed="widthCollapsed"/>
</template>

<script>
    export default {
        props: {
            width: {
                type: String,
                default: '250px'
            },
            widthCollapsed: {
                type: String,
                default: '50px'
            }
        },
        data() {
            return {
                menu: [
                    {
                        header: true,
						title: 'Captive Portal',
						hiddenOnCollapse: true,  
                        // component: componentName
                    },
                    {
                        href: this.$route('adminpanel.dashboard'),
                        title: 'Dashboard',
                        icon: 'fas fa-chart-line',
                        /*
                        disabled: true
                        badge: {
                            text: 'new',
                            // class:''
                        }
                        */
					},
					{
                        href: this.$route('adminpanel.nas'),
                        title: 'Nas',
                        icon: 'fas fa-archive',
					},
                    {
                        title: 'Manager',
                        icon: 'fas fa-user-shield',
                        child: [
                            {
                                href: this.$route('adminpanel.manager'),
                                title: 'Sub Link 1',
							},
							{
                                href: this.$route('adminpanel.manager'),
                                title: 'Sub Link 2',
							},
							{
                                href: this.$route('adminpanel.manager'),
                                title: 'Sub Link 3',
                            }
                        ]
					},
					{
                        title: 'Service',
                        icon: 'fas fa-wifi',
                        child: [
                            {
                                href: this.$route('adminpanel.service'),
                                title: 'Sub Link 1',
							},
							{
                                href: this.$route('adminpanel.service'),
                                title: 'Sub Link 2',
							},
							{
                                href: this.$route('adminpanel.service'),
                                title: 'Sub Link 3',
                            }
                        ]
					},
					{
                        title: 'User',
                        icon: 'fas fa-user',
                        child: [
                            {
                                href: this.$route('adminpanel.user'),
                                title: 'Sub Link 1',
							},
							{
                                href: this.$route('adminpanel.user'),
                                title: 'Sub Link 2',
							},
							{
                                href: this.$route('adminpanel.user'),
                                title: 'Sub Link 3',
                            }
                        ]
					},
					{
                        href: this.$route('adminpanel.finance'),
                        title: 'Finance',
                        icon: 'fas fa-money-check-alt',
					},
					{
                        href: this.$route('adminpanel.settings'),
                        title: 'Settings',
                        icon: 'fas fa-sliders-h',
					}
                ]
            }
		}
    }
</script>