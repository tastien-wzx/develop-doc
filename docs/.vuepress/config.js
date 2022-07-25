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
          '/ArrowChange',
          '/CommonFormButtonGroup',
          '/DebugBtn',
          '/DelayButton',
          '/DownloadButton',
          '/IconFont',
          '/ShihengUpload',
          '/StatusDot',
          '/Share/AddIcon',
          '/Share/CommonButtonGroup',
          '/Share/DashLikeLink',
          '/Share/DataSpan',
          '/Share/GreyText',
        ],
      },
      {
        title: '弹框',
        collapsable: false,
        children: [
          '/ActivityQrcode',
          '/DownloadQrcodeCommonModal',
          '/DownloadQrcodeModal',
          '/AddProductModal',
          '/CardModal',
          '/CouponModal',
          '/GroupCascader',
          '/ShopSelectModal',
          '/GroupModal',
          '/GroupSelectModalV2',
          '/OneProductSelectModal',
          '/ProductSelectModal',
          '/SelectOneProductModal',
          '/PackageProductModal',
          '/ShopSelectModalV2',
          '/SelectCouponsModal',
        ],
      },
      {
        title: '数据录入',
        collapsable: false,
        children: [
          '/AllShops',
          '/AllShopsSave',
          '/ShopSelected',
          '/ShopSelectForm',
          '/AvailableTimeFormItem',
          '/Filters/ArchitectureAndShop',
          '/Filters/ArchitectureCascader',
          '/FiltersAll/ArchitectureAndShop',
          '/FiltersAll/ArchitectureCascader',
          '/CommodityVolume',
          '/ColorIndexPicker',
          '/ChatScreen',
          '/DateSelectFilter',
          '/Editor',
          '/EditSortTable',
          '/EmployeeSelect',
          '/FieldPickInput',
          '/JumpPages',
          '/JumpPages2',
          '/RoleSelectForm',
          '/TagSelect',
          '/Uploader',
          '/WeekPicker',
          '/Share/MultipleOptionItem',
          '/Share/OptionItem',
        ],
      },
      {
        title: '数据展示',
        collapsable: false,
        children: [
          '/CompareData',
          '/CouponTable',
          '/CouponTable1',
          '/DraggableTable',
          '/Img',
          '/ProductDetail',
          '/MiniTag',
          '/Share/ShowTotal',
          '/Share/StartAndEndDate',
        ],
      },
      {
        title: '布局',
        collapsable: false,
        children: [
          '/ContentWrap',
          '/HeaderContent',
          '/HeaderDropdown',
          '/HeaderSearch',
          '/LogoContainer',
          '/RightContent',
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
