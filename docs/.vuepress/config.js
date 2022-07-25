module.exports = {
  base: '/develop-doc/',
  title: '智慧门店后台组件文档',
  themeConfig: {
    nav: [
        { 
          text: 'Github', link: '' ,
        }
    ],
    sidebar: [
      {
        title: '通用',
        collapsable: false,
        children: [
          '/components/ArrowChange',
          '/components/CommonFormButtonGroup',
          '/components/DebugBtn',
          '/components/DelayButton',
          '/components/DownloadButton',
          '/components/IconFont',
          '/components/ShihengUpload',
          '/components/StatusDot',
          '/components/Share/AddIcon',
          '/components/Share/CommonButtonGroup',
          '/components/Share/DashLikeLink',
          '/components/Share/DataSpan',
          '/components/Share/GreyText',
        ],
      },
      {
        title: '弹框',
        collapsable: false,
        children: [
          '/components/ActivityQrcode',
          '/components/DownloadQrcodeCommonModal',
          '/components/DownloadQrcodeModal',
          '/components/AddProductModal',
          '/components/CardModal',
          '/components/CouponModal',
          '/components/GroupCascader',
          '/components/ShopSelectModal',
          '/components/GroupModal',
          '/components/GroupSelectModalV2',
          '/components/OneProductSelectModal',
          '/components/ProductSelectModal',
          '/components/SelectOneProductModal',
          '/components/PackageProductModal',
          '/components/ShopSelectModalV2',
          '/components/SelectCouponsModal',
        ],
      },
      {
        title: '数据录入',
        collapsable: false,
        children: [
          '/components/AllShops',
          '/components/AllShopsSave',
          '/components/ShopSelected',
          '/components/ShopSelectForm',
          '/components/AvailableTimeFormItem',
          '/components/Filters/ArchitectureAndShop',
          '/components/Filters/ArchitectureCascader',
          '/components/FiltersAll/ArchitectureAndShop',
          '/components/FiltersAll/ArchitectureCascader',
          '/components/CommodityVolume',
          '/components/ColorIndexPicker',
          '/components/ChatScreen',
          '/components/DateSelectFilter',
          '/components/Editor',
          '/components/EditSortTable',
          '/components/EmployeeSelect',
          '/components/FieldPickInput',
          '/components/JumpPages',
          '/components/JumpPages2',
          '/components/RoleSelectForm',
          '/components/TagSelect',
          '/components/Uploader',
          '/components/WeekPicker',
          '/components/Share/MultipleOptionItem',
          '/components/Share/OptionItem',
        ],
      },
      {
        title: '数据展示',
        collapsable: false,
        children: [
          '/components/CompareData',
          '/components/CouponTable',
          '/components/CouponTable1',
          '/components/DraggableTable',
          '/components/Img',
          '/components/ProductDetail',
          '/components/MiniTag',
          '/components/Share/ShowTotal',
          '/components/Share/StartAndEndDate',
        ],
      },
      {
        title: '布局',
        collapsable: false,
        children: [
          '/components/ContentWrap',
          '/components/HeaderContent',
          '/components/HeaderDropdown',
          '/components/HeaderSearch',
          '/components/LogoContainer',
          '/components/RightContent',
        ],
      }
    ]
  },
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  subSidebar: 'auto'
}
