import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, MoodHappyIcon, TypographyIcon, UserPlusIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    {
        title: 'Blog',
        icon: LayoutDashboardIcon,
        to: '/blog'
    },
    { header: 'Product' },
    {
        title:"Product",
        icon:MoodHappyIcon,
        to:'/product'
    },
    {
        title:"Add Product",
        icon:MoodHappyIcon,
        to:'/product/compose'
    },
    { header: 'utilities' },
    {
        title: 'Typography',
        icon: TypographyIcon,
        to: '/ui/typography'
    },
    {
        title: 'Shadow',
        icon: CopyIcon,
        to: '/ui/shadow'
    },
    { header: 'Extra' },
    {
        title: 'Icons',
        icon: MoodHappyIcon,
        to: '/icons'
    },
    {
        title: 'Sample Page',
        icon: ApertureIcon,
        to: '/sample-page'
    },
];

export default sidebarItem;
