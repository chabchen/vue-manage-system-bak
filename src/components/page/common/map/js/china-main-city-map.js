const cityMap = {
    "安徽": "340000",
    "澳门": '820000',
    "北京": '110000',
    "重庆": '500000',
    "福建": '350000',
    "甘肃": '620000',
    "广东": '440000',
    "广西": "450000",
    "贵州": '520000',
    "海南": '460000',
    "河北": '130000',
    "黑龙江": '230000',
    "河南": '410000',
    "湖北": '420000',
    "湖南": '430000',
    "江苏": '320000',
    "江西": '360000',
    "吉林": '220000',
    "辽宁": '210000',
    "内蒙古": '150000',
    "宁夏": '640000',
    "青海": '630000',
    "山东": '370000',
    "上海": '310000',
    "山西": '140000',
    "四川": '510000',
    "台湾": '710000',
    "天津": '120000',
    "新疆": '650000',
    "陕西": '610000',
    "西藏": '540000',
    "云南": '530000',
    "浙江": '330000',
    "香港": '810000',
    "北京": "110100",
    "天津": "120100",
    "上海": "310100",
    "重庆": "500100",
    "崇明县": "310200",
    "湖北省直辖县": "429000",
    "铜仁": "522200",
    "毕节": "522400",
    "石家庄": "130100",
    "唐山": "130200",
    "秦皇岛": "130300",
    "邯郸": "130400",
    "邢台": "130500",
    "保定": "130600",
    "张家口": "130700",
    "承德": "130800",
    "沧州": "130900",
    "廊坊": "131000",
    "衡水": "131100",
    "太原": "140100",
    "大同": "140200",
    "阳泉": "140300",
    "长治": "140400",
    "晋城": "140500",
    "朔州": "140600",
    "晋中": "140700",
    "运城": "140800",
    "忻州": "140900",
    "临汾": "141000",
    "吕梁": "141100",
    "呼和浩特": "150100",
    "包头": "150200",
    "乌海": "150300",
    "赤峰": "150400",
    "通辽": "150500",
    "鄂尔多斯": "150600",
    "呼伦贝尔": "150700",
    "巴彦淖尔": "150800",
    "乌兰察布": "150900",
    "兴安盟": "152200",
    "锡林郭勒盟": "152500",
    "阿拉善盟": "152900",
    "沈阳": "210100",
    "大连": "210200",
    "鞍山": "210300",
    "抚顺": "210400",
    "本溪": "210500",
    "丹东": "210600",
    "锦州": "210700",
    "营口": "210800",
    "阜新": "210900",
    "辽阳": "211000",
    "盘锦": "211100",
    "铁岭": "211200",
    "朝阳": "211300",
    "葫芦岛": "211400",
    "长春": "220100",
    "吉林市": "220200",
    "四平": "220300",
    "辽源": "220400",
    "通化": "220500",
    "白山": "220600",
    "松原": "220700",
    "白城": "220800",
    "延边朝鲜族自治州": "222400",
    "哈尔滨": "230100",
    "齐齐哈尔": "230200",
    "鸡西": "230300",
    "鹤岗": "230400",
    "双鸭山": "230500",
    "大庆": "230600",
    "伊春": "230700",
    "佳木斯": "230800",
    "七台河": "230900",
    "牡丹江": "231000",
    "黑河": "231100",
    "绥化": "231200",
    "大兴安岭地区": "232700",
    "南京": "320100",
    "无锡": "320200",
    "徐州": "320300",
    "常州": "320400",
    "苏州": "320500",
    "南通": "320600",
    "连云港": "320700",
    "淮安": "320800",
    "盐城": "320900",
    "扬州": "321000",
    "镇江": "321100",
    "泰州": "321200",
    "宿迁": "321300",
    "杭州": "330100",
    "宁波": "330200",
    "温州": "330300",
    "嘉兴": "330400",
    "湖州": "330500",
    "绍兴": "330600",
    "金华": "330700",
    "衢州": "330800",
    "舟山": "330900",
    "台州": "331000",
    "丽水": "331100",
    "合肥": "340100",
    "芜湖": "340200",
    "蚌埠": "340300",
    "淮南": "340400",
    "马鞍山": "340500",
    "淮北": "340600",
    "铜陵": "340700",
    "安庆": "340800",
    "黄山": "341000",
    "滁州": "341100",
    "阜阳": "341200",
    "宿州": "341300",
    "六安": "341500",
    "亳州": "341600",
    "池州": "341700",
    "宣城": "341800",
    "福州": "350100",
    "厦门": "350200",
    "莆田": "350300",
    "三明": "350400",
    "泉州": "350500",
    "漳州": "350600",
    "南平": "350700",
    "龙岩": "350800",
    "宁德": "350900",
    "南昌": "360100",
    "景德镇": "360200",
    "萍乡": "360300",
    "九江": "360400",
    "新余": "360500",
    "鹰潭": "360600",
    "赣州": "360700",
    "吉安": "360800",
    "宜春": "360900",
    "抚州": "361000",
    "上饶": "361100",
    "济南": "370100",
    "青岛": "370200",
    "淄博": "370300",
    "枣庄": "370400",
    "东营": "370500",
    "烟台": "370600",
    "潍坊": "370700",
    "济宁": "370800",
    "泰安": "370900",
    "威海": "371000",
    "日照": "371100",
    "莱芜": "371200",
    "临沂": "371300",
    "德州": "371400",
    "聊城": "371500",
    "滨州": "371600",
    "菏泽": "371700",
    "郑州": "410100",
    "开封": "410200",
    "洛阳": "410300",
    "平顶山": "410400",
    "安阳": "410500",
    "鹤壁": "410600",
    "新乡": "410700",
    "焦作": "410800",
    "濮阳": "410900",
    "许昌": "411000",
    "漯河": "411100",
    "三门峡": "411200",
    "南阳": "411300",
    "商丘": "411400",
    "信阳": "411500",
    "周口": "411600",
    "驻马店": "411700",
    "省直辖县级行政区划": "469000",
    "武汉": "420100",
    "黄石": "420200",
    "十堰": "420300",
    "宜昌": "420500",
    "襄阳": "420600",
    "鄂州": "420700",
    "荆门": "420800",
    "孝感": "420900",
    "荆州": "421000",
    "黄冈": "421100",
    "咸宁": "421200",
    "随州": "421300",
    "恩施土家族苗族自治州": "422800",
    "长沙": "430100",
    "株洲": "430200",
    "湘潭": "430300",
    "衡阳": "430400",
    "邵阳": "430500",
    "岳阳": "430600",
    "常德": "430700",
    "张家界": "430800",
    "益阳": "430900",
    "郴州": "431000",
    "永州": "431100",
    "怀化": "431200",
    "娄底": "431300",
    "湘西土家族苗族自治州": "433100",
    "广州": "440100",
    "韶关": "440200",
    "深圳": "440300",
    "珠海": "440400",
    "汕头": "440500",
    "佛山": "440600",
    "江门": "440700",
    "湛江": "440800",
    "茂名": "440900",
    "肇庆": "441200",
    "惠州": "441300",
    "梅州": "441400",
    "汕尾": "441500",
    "河源": "441600",
    "阳江": "441700",
    "清远": "441800",
    "东莞": "441900",
    "中山": "442000",
    "潮州": "445100",
    "揭阳": "445200",
    "云浮": "445300",
    "南宁": "450100",
    "柳州": "450200",
    "桂林": "450300",
    "梧州": "450400",
    "北海": "450500",
    "防城港": "450600",
    "钦州": "450700",
    "贵港": "450800",
    "玉林": "450900",
    "百色": "451000",
    "贺州": "451100",
    "河池": "451200",
    "来宾": "451300",
    "崇左": "451400",
    "海口": "460100",
    "三亚": "460200",
    "三沙": "460300",
    "成都": "510100",
    "自贡": "510300",
    "攀枝花": "510400",
    "泸州": "510500",
    "德阳": "510600",
    "绵阳": "510700",
    "广元": "510800",
    "遂宁": "510900",
    "内江": "511000",
    "乐山": "511100",
    "南充": "511300",
    "眉山": "511400",
    "宜宾": "511500",
    "广安": "511600",
    "达州": "511700",
    "雅安": "511800",
    "巴中": "511900",
    "资阳": "512000",
    "阿坝藏族羌族自治州": "513200",
    "甘孜藏族自治州": "513300",
    "凉山彝族自治州": "513400",
    "贵阳": "520100",
    "六盘水": "520200",
    "遵义": "520300",
    "安顺": "520400",
    "黔西南布依族苗族自治州": "522300",
    "黔东南苗族侗族自治州": "522600",
    "黔南布依族苗族自治州": "522700",
    "昆明": "530100",
    "曲靖": "530300",
    "玉溪": "530400",
    "保山": "530500",
    "昭通": "530600",
    "丽江": "530700",
    "普洱": "530800",
    "临沧": "530900",
    "楚雄彝族自治州": "532300",
    "红河哈尼族彝族自治州": "532500",
    "文山壮族苗族自治州": "532600",
    "西双版纳傣族自治州": "532800",
    "大理白族自治州": "532900",
    "德宏傣族景颇族自治州": "533100",
    "怒江傈僳族自治州": "533300",
    "迪庆藏族自治州": "533400",
    "拉萨": "540100",
    "昌都地区": "542100",
    "山南地区": "542200",
    "日喀则地区": "542300",
    "那曲地区": "542400",
    "阿里地区": "542500",
    "林芝地区": "542600",
    "西安": "610100",
    "铜川": "610200",
    "宝鸡": "610300",
    "咸阳": "610400",
    "渭南": "610500",
    "延安": "610600",
    "汉中": "610700",
    "榆林": "610800",
    "安康": "610900",
    "商洛": "611000",
    "兰州": "620100",
    "嘉峪关": "620200",
    "金昌": "620300",
    "白银": "620400",
    "天水": "620500",
    "武威": "620600",
    "张掖": "620700",
    "平凉": "620800",
    "酒泉": "620900",
    "庆阳": "621000",
    "定西": "621100",
    "陇南": "621200",
    "临夏回族自治州": "622900",
    "甘南藏族自治州": "623000",
    "西宁": "630100",
    "海东地区": "632100",
    "海北藏族自治州": "632200",
    "黄南藏族自治州": "632300",
    "海南藏族自治州": "632500",
    "果洛藏族自治州": "632600",
    "玉树藏族自治州": "632700",
    "海西蒙古族藏族自治州": "632800",
    "银川": "640100",
    "石嘴山": "640200",
    "吴忠": "640300",
    "固原": "640400",
    "中卫": "640500",
    "乌鲁木齐": "650100",
    "克拉玛依": "650200",
    "吐鲁番地区": "652100",
    "哈密地区": "652200",
    "昌吉回族自治州": "652300",
    "博尔塔拉蒙古自治州": "652700",
    "巴音郭楞蒙古自治州": "652800",
    "阿克苏地区": "652900",
    "克孜勒苏柯尔克孜自治州": "653000",
    "喀什地区": "653100",
    "和田地区": "653200",
    "伊犁哈萨克自治州": "654000",
    "塔城地区": "654200",
    "阿勒泰地区": "654300",
    "自治区直辖县级行政区划": "659000",
    "台湾省": "710000",
    "香港特别行政区": "810100",
    "澳门特别行政区": "820000"
}

export default cityMap