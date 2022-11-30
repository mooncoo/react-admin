const Common = {
  // 当前版本号
  COPY_VERSION: "SBC V4.48.0",
  HTTP_TIME_OUT: 1000,
  DAY_FORMAT: "YYYY-MM-DD",
  DATE_FORMAT_HOUR: "YYYY-MM-DD HH",
  DATE_FORMAT: "YYYY-MM-DD HH:mm",
  TIME_FORMAT: "YYYY-MM-DD HH:mm:ss",
  DATE_FORMAT_SECOND: "HH:mm:ss",
  ONLY_TIME_FORMAT: "HH:mm:ss",
  SUCCESS_CODE: "K-000000",
  REGISTER_TITLE: "编辑商家注册协议",
  ENTER_TITLE: "编辑商家入驻协议",
  // 商品审核状态
  goodsState: {
    0: "待审核",
    1: "已审核",
    2: "审核未通过",
    3: "禁售中",
  },

  drawCashChannel: {
    0: "微信",
    1: "支付宝",
  },

  accountStatus: {
    0: "启用",
    1: "禁用",
  },

  // 退货状态
  returnGoodsState: {
    INIT: "待审核",
    AUDIT: "待填写物流信息",
    DELIVERED: "待商家收货",
    RECEIVED: "待退款",
    COMPLETED: "已完成",
    REJECT_RECEIVE: "拒绝收货",
    REJECT_REFUND: "拒绝退款",
    VOID: "已作废",
    REFUND_FAILED: "退款失败",
  },
  // 退款状态
  returnMoneyState: {
    INIT: "待审核",
    AUDIT: "待退款",
    COMPLETED: "已完成",
    REJECT_REFUND: "拒绝退款",
    VOID: "已作废",
    REFUND_FAILED: "退款失败",
  },
  // 退款单状态
  refundStatus: {
    0: "待退款",
    1: "拒绝退款",
    2: "已退款",
    3: "待退款",
  },
  // 支付方式
  payType: {
    0: "在线支付",
    1: "转账汇款",
  },
  // 支付渠道
  payWay: {
    UNIONPAY: "银联云闪付",
    WECHAT: "微信",
    ALIPAY: "支付宝",
    ADVANCE: "预存款",
    POINT: "积分",
    CASH: "转账汇款",
    UNIONPAY_B2B: "企业银联",
    COUPON: "优惠券",
    BALANCE: "余额支付",
    CREDIT: "授信",
  },
  // 设价方式
  priceType: {
    0: "按客户设价",
    1: "按订货量设价",
    2: "以市场价销售",
  },
  // 平台类型
  platform: {
    BOSS: "平台",
    MERCHANT: "商户",
    THIRD: "第三方",
    CUSTOMER: "客户", //C用户
  },

  // 发货状态
  deliverStatus: {
    NOT_YET_SHIPPED: "未发货",
    SHIPPED: "已发货",
    PART_SHIPPED: "部分发货",
    VOID: "作废",
  },

  // 支付状态
  payState: {
    NOT_PAID: "未支付",
    PARTIAL_PAID: "部分支付",
    PAID: "已支付",
  },

  // 订单状态
  flowState: {
    INIT: "待审核",
    REMEDY: "修改订单",
    REFUND: "退款",
    AUDIT: "待发货",
    DELIVERED_PART: "待发货",
    DELIVERED: "待收货",
    CONFIRMED: "已收货",
    COMPLETED: "已完成",
    VOID: "已作废",
    REFUND_FAILED: "退款失败",
  },

  // 订单状态
  flowStateNew: {
    INIT: "待审核",
    GROUPON: "待成团",
    AUDIT: "待发货",
    DELIVERED: "待收货",
    CONFIRMED: "已收货",
    COMPLETED: "已完成",
    VOID: "已作废",
  },
  // 优惠券使用范围
  couponScopeType: {
    0: "全部商品",
    1: "限品牌",
    2: "限类目",
    3: "限类目", //店铺
    4: "部分商品",
  },
  // 优惠券查询类型
  couponStatus: {
    0: "全部",
    1: "生效中",
    2: "未生效",
    3: "领取生效",
    4: "已失效",
  },
  activityStatus: {
    1: "进行中",
    2: "暂停中",
    3: "未开始",
    4: "已结束",
    6: "待审核",
    7: "审核未通过",
  },
  couponActivityType: {
    0: "全场赠券",
    1: "精准发券",
    2: "进店赠券",
    3: "注册赠券",
    4: "权益赠券",
    5: "分销邀新赠券",
    6: "积分兑换券",
    7: "企业注册赠券",
  },
  creditAuditStatus: {
    0: "待审核",
    1: "审核未通过",
    2: "已审核",
    3: "待审核",
  },
  // 统计模块，companyId的常量...
  platformDefaultId: 1,
  spuMaxSku: 200,

  // 跨境常量 贸易类型
  crossBorderTradeType: {
    DIRECT_MAIL: "跨境直邮",
    GOODS_COLLECT: "保税集货",
    BONDED_GOODS: "保税备货",
    COMMON_TRADE: "一般贸易",
  },
  // 商品类型，0：实物商品，1：虚拟商品 2：电子卡券
  goodsType: {
    0: "实物商品",
    1: "虚拟商品",
    2: "电子卡券",
  },

  //已注销标识
  logOutStatus: {
    0: "",
    1: "",
    2: "(已注销)",
  },
};
module.exports = Common;
