/* ee-pro-exam v2 data/videos.js
   张工教育专业基础精讲五大学科独立合集 + 计算器辅助 + 2026新版电路 + 原有姜小白/电教/大熊/真题
   结构：VIDEOS.<方向>.<系列Key>.subjects.<学科Key>.collections[]
         每 collection: { bvid, label, duration, totalPages, episodes精选, playlist全量 }
*/
(function(){
  var ZHANGGONG_INTRO = '张工教育官方2025-2026 注册电气工程师基础考试 · 专业基础五大学科精讲班独立合集。按学科拆分独立BV，总时长约八十八小时，覆盖全部下午段六十道专业基础题所涉考点。';

  /* 张工教育 5学科 + 辅助 + 新版电路 数据 */
  var zhanggongSubjects = {
    circuit: {
      title: '电路与电磁场（含独立电磁场辅助合集）',
      short: '电路与电磁场',
      color: 'circuit',
      totalHours: '≈ 29 h (电路20h24m + 电磁场8h28m)',
      pdQuestions: '供配电约14~16题 (28~32分)',
      ptQuestions: '发输变电约16~18题 (32~36分)',
      collections: [
        {
          bvid: 'BV1yL411R7rr', label: '电路部分 精讲', duration: '20h24m', totalPages: 45,
          chapters: [
            { idx: 1, name: '基本概念和基本定律', pages: [1,5], lectures: '第1~5讲', weight: '★★★' },
            { idx: 2, name: '电路的分析方法', pages: [6,11], lectures: '第6~11讲', weight: '★★★★★' },
            { idx: 3, name: '正弦交流电路', pages: [12,20], lectures: '第12~20讲', weight: '★★★★★' },
            { idx: 4, name: '非正弦周期电路', pages: [21,23], lectures: '第21~23讲', weight: '★★★' },
            { idx: 5, name: '动态电路暂态分析', pages: [24,30], lectures: '第24~30讲', weight: '★★★★' },
            { idx: 6, name: '静电场', pages: [31,35], lectures: '第31~35讲', weight: '★★★' },
            { idx: 7, name: '恒定电场', pages: [36,38], lectures: '第36~38讲', weight: '★★' },
            { idx: 8, name: '恒定磁场', pages: [39,43], lectures: '第39~43讲', weight: '★★★' },
            { idx: 9, name: '均匀传输线 + 总结', pages: [44,45], lectures: '第44~45讲', weight: '★★' }
          ],
          episodes: [
            { page:1, title:'电路基本概念：电压电流参考方向与功率计算', duration:'27:14' },
            { page:6, title:'KCL/KVL 深度解析 + 节点电压法基础', duration:'33:58' },
            { page:8, title:'网孔电流法 + 支路电流法 对比例题', duration:'31:40' },
            { page:12, title:'正弦量相量表示 + RLC串联阻抗三角形', duration:'29:06' },
            { page:15, title:'正弦稳态功率：有功/无功/视在/功率因数', duration:'26:50' },
            { page:17, title:'三相电路：线值相值 + 对称三相计算', duration:'30:18' },
            { page:24, title:'动态电路换路定则 + 一阶RC/RL三要素', duration:'32:42' },
            { page:30, title:'二阶电路过阻尼欠阻尼 + 状态方程基础', duration:'28:00' }
          ],
          playlist: [
            {page:1,title:'电路基本概念与参考方向',duration:'27:14'},{page:2,title:'欧姆定律与基尔霍夫定律',duration:'26:32'},
            {page:3,title:'电阻的串并联、YΔ变换',duration:'28:50'},{page:4,title:'电源等效变换',duration:'25:10'},
            {page:5,title:'受控源与输入电阻计算',duration:'27:42'},
            {page:6,title:'节点电压法基础',duration:'33:58'},{page:7,title:'节点电压法-含受控源情形',duration:'30:20'},
            {page:8,title:'网孔电流法与支路法对比',duration:'31:40'},{page:9,title:'叠加定理',duration:'26:48'},
            {page:10,title:'戴维南定理-开路电压求法',duration:'29:50'},{page:11,title:'诺顿定理与最大功率传输',duration:'30:10'},
            {page:12,title:'正弦量与相量表示',duration:'29:06'},{page:13,title:'RLC串联阻抗与导纳',duration:'27:40'},
            {page:14,title:'RLC并联与复阻抗串并联',duration:'28:56'},{page:15,title:'有功、无功、视在功率',duration:'26:50'},
            {page:16,title:'功率因数提高',duration:'24:10'},{page:17,title:'三相电路-线值相值关系',duration:'30:18'},
            {page:18,title:'对称三相功率计算',duration:'27:30'},{page:19,title:'不对称三相-位形图法',duration:'28:10'},
            {page:20,title:'正弦稳态习题综合',duration:'32:00'},
            {page:21,title:'非正弦周期信号分解与有效值',duration:'26:20'},{page:22,title:'非正弦功率与谐波计算',duration:'27:10'},
            {page:23,title:'非正弦周期电路例题',duration:'24:30'},
            {page:24,title:'换路定则与初始条件',duration:'32:42'},{page:25,title:'一阶RC电路三要素',duration:'27:30'},
            {page:26,title:'一阶RL电路与方波响应',duration:'28:50'},{page:27,title:'微分积分电路',duration:'26:10'},
            {page:28,title:'二阶电路微分方程建立',duration:'29:20'},{page:29,title:'二阶过阻尼/欠阻尼响应',duration:'30:40'},
            {page:30,title:'状态方程列写',duration:'28:00'},
            {page:31,title:'静电场库仑定律与电场强度',duration:'27:20'},{page:32,title:'高斯定理计算场强',duration:'28:50'},
            {page:33,title:'电位与电偶极子',duration:'25:30'},{page:34,title:'导体与介质极化',duration:'26:10'},
            {page:35,title:'电容与电场能量',duration:'27:40'},
            {page:36,title:'恒定电场-电流密度与欧姆定律微分形式',duration:'24:50'},
            {page:37,title:'电导与接地电阻',duration:'25:30'},{page:38,title:'静电比拟法',duration:'24:00'},
            {page:39,title:'恒定磁场-毕奥萨伐尔定律',duration:'28:40'},{page:40,title:'安培环路定理',duration:'29:50'},
            {page:41,title:'矢量磁位与磁场强度',duration:'26:30'},{page:42,title:'自感互感与磁场能量',duration:'27:10'},
            {page:43,title:'磁场力与霍尔效应',duration:'25:20'},
            {page:44,title:'均匀传输线方程与行波',duration:'30:00'},{page:45,title:'传输线特性阻抗与总复习',duration:'28:30'}
          ]
        },
        {
          bvid: 'BV1S24y1x7Rd', label: '电磁场部分 辅助 (张工专题)', duration: '8h28m', totalPages: 16,
          chapters: [
            { idx: 1, name: '静电场边值问题', pages: [1,4], lectures: '第1~4讲', weight: '★★★' },
            { idx: 2, name: '恒定磁场镜像法', pages: [5,9], lectures: '第5~9讲', weight: '★★★' },
            { idx: 3, name: '时变电磁场与麦克斯韦方程', pages: [10,14], lectures: '第10~14讲', weight: '★★★★' },
            { idx: 4, name: '平面电磁波与无损传输线', pages: [15,16], lectures: '第15~16讲', weight: '★★' }
          ],
          episodes: [
            { page:1, title:'镜像法基本思想-平面导体镜像', duration:'30:00' },
            { page:5, title:'长直导线与圆柱导体镜像', duration:'32:40' },
            { page:10,title:'法拉第电磁感应定律 + 位移电流', duration:'31:10' },
            { page:12,title:'麦克斯韦方程组积分与微分形式', duration:'30:20' },
            { page:15,title:'平面电磁波传播速度与波阻抗', duration:'26:00' }
          ],
          playlist: [
            {page:1,title:'镜像法-平面导体',duration:'30:00'},{page:2,title:'点电荷对球面镜像',duration:'31:40'},
            {page:3,title:'柱面镜像与电轴法',duration:'32:20'},{page:4,title:'分离变量法矩形域',duration:'29:10'},
            {page:5,title:'长直导线圆柱导体镜像',duration:'32:40'},{page:6,title:'安培环路定理多介质',duration:'28:50'},
            {page:7,title:'磁标位与磁介质分界面',duration:'27:30'},{page:8,title:'铁磁体边界镜像',duration:'26:40'},
            {page:9,title:'电感计算-长直双输电线',duration:'28:10'},{page:10,title:'法拉第定律与位移电流',duration:'31:10'},
            {page:11,title:'全电流连续性方程',duration:'29:30'},{page:12,title:'麦克斯韦方程组完整形式',duration:'30:20'},
            {page:13,title:'边界条件汇总表',duration:'26:00'},{page:14,title:'坡印廷矢量与能量流',duration:'28:30'},
            {page:15,title:'平面电磁波波阻抗与传播速度',duration:'26:00'},{page:16,title:'传输线反射系数与驻波',duration:'24:20'}
          ]
        }
      ]
    },
    analog: {
      title: '模拟电子技术',
      short: '模拟电子',
      color: 'analog',
      totalHours: '≈ 12 h 46 m',
      pdQuestions: '供配电约8~10题 (16~20分)',
      ptQuestions: '发输变电约8~10题 (16~20分)',
      collections: [{
        bvid: 'BV1nT411B7j5', label: '模电 精讲班', duration: '12h46m', totalPages: 30,
        chapters: [
          { idx: 1, name: '半导体二极管', pages:[1,3], lectures:'第1~3讲', weight:'★★' },
          { idx: 2, name: '三极管(BJT)', pages:[4,8], lectures:'第4~8讲', weight:'★★★★★' },
          { idx: 3, name: '场效应管(FET)', pages:[9,11], lectures:'第9~11讲', weight:'★★★' },
          { idx: 4, name: '放大电路基础', pages:[12,17], lectures:'第12~17讲', weight:'★★★★★' },
          { idx: 5, name: '频率响应', pages:[18,19], lectures:'第18~19讲', weight:'★★★' },
          { idx: 6, name: '负反馈放大', pages:[20,23], lectures:'第20~23讲', weight:'★★★★' },
          { idx: 7, name: '集成运算放大器基础', pages:[24,25], lectures:'第24~25讲', weight:'★★★' },
          { idx: 8, name: '信号运算处理电路', pages:[26,27], lectures:'第26~27讲', weight:'★★★★' },
          { idx: 9, name: '信号发生电路', pages:[28], lectures:'第28讲', weight:'★★' },
          { idx: 10, name: '功率放大电路', pages:[29], lectures:'第29讲', weight:'★★' },
          { idx: 11, name: '直流稳压电源', pages:[30], lectures:'第30讲', weight:'★★★' }
        ],
        episodes: [
          { page:1, title:'PN结单向导电性与二极管伏安特性', duration:'22:30' },
          { page:4, title:'三极管输入输出特性曲线 + 工作区判定', duration:'27:50' },
          { page:6, title:'共射放大电路图解分析法', duration:'26:10' },
          { page:8, title:'三极管微变等效电路 + 电压放大倍数推导', duration:'28:30' },
          { page:12,title:'阻容耦合共射放大 - 分压偏置稳定Q点', duration:'25:50' },
          { page:14,title:'共集(射极输出器)与共基组态对比', duration:'26:40' },
          { page:20,title:'负反馈四种组态判定 + 对放大倍数影响', duration:'27:00' },
          { page:26,title:'反相/同相比例/加法/减法/微分/积分 运放电路', duration:'28:20' }
        ],
        playlist: [
          {page:1,title:'PN结与二极管伏安特性',duration:'22:30'},{page:2,title:'二极管等效电路与典型电路',duration:'23:40'},
          {page:3,title:'稳压管与限制电路',duration:'22:10'},
          {page:4,title:'三极管结构与伏安特性',duration:'27:50'},{page:5,title:'三极管三种组态与工作区',duration:'25:30'},
          {page:6,title:'共射放大图解分析法',duration:'26:10'},{page:7,title:'分压偏置与Q点稳定',duration:'24:50'},
          {page:8,title:'微变等效电路与Av计算',duration:'28:30'},
          {page:9,title:'结型场效应管JFET特性',duration:'24:40'},{page:10,title:'增强型耗尽型MOS管',duration:'25:20'},
          {page:11,title:'共源共漏放大电路分析',duration:'26:10'},
          {page:12,title:'阻容耦合共射偏置电路',duration:'25:50'},{page:13,title:'多级放大级联与总Av',duration:'27:30'},
          {page:14,title:'共集与共基组态对比',duration:'26:40'},{page:15,title:'差分放大电路',duration:'28:20'},
          {page:16,title:'差分放大-双端/单端输入输出',duration:'26:10'},{page:17,title:'恒流源差分与复合管',duration:'25:30'},
          {page:18,title:'RC耦合放大频率响应',duration:'26:00'},{page:19,title:'波特图与带宽积',duration:'24:50'},
          {page:20,title:'负反馈四种组态判定',duration:'27:00'},{page:21,title:'负反馈对性能影响-增益稳定性',duration:'25:40'},
          {page:22,title:'负反馈输入输出电阻变化',duration:'24:30'},{page:23,title:'深度负反馈与例题',duration:'26:10'},
          {page:24,title:'运放结构与开环参数',duration:'24:20'},{page:25,title:'运放理想模型与两虚',duration:'25:00'},
          {page:26,title:'基本运算电路8种',duration:'28:20'},{page:27,title:'有源滤波器-一阶二阶RC',duration:'25:40'},
          {page:28,title:'正弦波振荡-RC文氏桥/LC三点式',duration:'24:50'},
          {page:29,title:'互补对称OCL/OTL功率放大',duration:'26:00'},
          {page:30,title:'桥式整流、电容滤波、三端稳压器',duration:'25:10'}
        ]
      }]
    },
    digital: {
      title: '数字电子技术',
      short: '数字电子',
      color: 'digital',
      totalHours: '≈ 13 h 09 m',
      pdQuestions: '供配电约6~8题 (12~16分)',
      ptQuestions: '发输变电约6~8题 (12~16分)',
      collections: [{
        bvid: 'BV1Tk4y1q7L8', label: '数电 精讲班', duration: '13h09m', totalPages: 6,
        chapters: [
          { idx:1, name:'数制与码制 + 逻辑代数基础', pages:[1], lectures:'P1 (2h35m)', weight:'★★★' },
          { idx:2, name:'逻辑门电路 + 组合逻辑电路', pages:[2], lectures:'P2 (2h21m)', weight:'★★★★★' },
          { idx:3, name:'触发器 + 时序逻辑电路分析', pages:[3], lectures:'P3 (2h58m)', weight:'★★★★★' },
          { idx:4, name:'脉冲波形产生与整形 + 半导体存储器', pages:[4], lectures:'P4 (2h20m)', weight:'★★★' },
          { idx:5, name:'数模转换DAC + 模数转换ADC', pages:[5], lectures:'P5 (0h43m)', weight:'★★★' },
          { idx:6, name:'数电典型综合例题', pages:[6], lectures:'P6 (2h12m)', weight:'★★★★' }
        ],
        episodes: [
          { page:1, title:'数制转换(2/8/10/16) + 8421/2421/余3码 + 卡诺图化简', duration:'2:35:00' },
          { page:2, title:'TTL与CMOS门特性 + 编码器/译码器/数据选择器/加法器/比较器', duration:'2:21:00' },
          { page:3, title:'RS/JK/D/T触发器 + 同步时序逻辑方程列写 + 计数器/移位寄存器', duration:'2:58:00' },
          { page:4, title:'555定时器(多谐/单稳/施密特) + ROM/RAM/PLD扩展', duration:'2:20:00' },
          { page:5, title:'DAC权电阻倒T形电阻网络 + ADC逐次逼近/双积分', duration:'0:43:00' },
          { page:6, title:'近十年真题数电部分典型例题串讲 + 易错题避坑', duration:'2:12:00' }
        ],
        playlist: [
          {page:1,title:'数制码制逻辑代数基础',duration:'2:35:00'},
          {page:2,title:'逻辑门与组合逻辑电路',duration:'2:21:00'},
          {page:3,title:'触发器与时序逻辑电路',duration:'2:58:00'},
          {page:4,title:'脉冲电路与存储器',duration:'2:20:00'},
          {page:5,title:'DAC与ADC',duration:'0:43:00'},
          {page:6,title:'典型真题讲解',duration:'2:12:00'}
        ]
      }]
    },
    machines: {
      title: '电机学',
      short: '电机学',
      color: 'machines',
      totalHours: '≈ 16 h 26 m',
      pdQuestions: '供配电约6~8题 (12~16分)',
      ptQuestions: '发输变电约8~10题 (16~20分，重点更高)',
      collections: [{
        bvid: 'BV1gN411w7ZW', label: '电机学 精讲班', duration: '16h26m', totalPages: 34,
        chapters: [
          { idx:1, name:'磁路与变压器基础', pages:[1,5], lectures:'第1~5讲', weight:'★★★' },
          { idx:2, name:'三相变压器', pages:[6,10], lectures:'第6~10讲', weight:'★★★★' },
          { idx:3, name:'同步发电机基本原理与特性', pages:[11,18], lectures:'第11~18讲', weight:'★★★★★' },
          { idx:4, name:'同步发电机并联运行与故障', pages:[19,22], lectures:'第19~22讲', weight:'★★★★' },
          { idx:5, name:'异步电机(感应电机)结构与原理', pages:[23,27], lectures:'第23~27讲', weight:'★★★★★' },
          { idx:6, name:'异步电机启动、调速、制动', pages:[28,30], lectures:'第28~30讲', weight:'★★★★' },
          { idx:7, name:'直流电机基本原理与特性', pages:[31,33], lectures:'第31~33讲', weight:'★★★' },
          { idx:8, name:'电动机选择与总复习', pages:[34], lectures:'第34讲', weight:'★★' }
        ],
        episodes: [
          { page:1, title:'磁路欧姆定律与铁磁材料B-H曲线', duration:'28:40' },
          { page:3, title:'单相变压器空载运行与励磁阻抗', duration:'30:10' },
          { page:5, title:'变压器负载运行 + 简化等效电路', duration:'29:20' },
          { page:6, title:'三相变压器联结组别 Yyn0/Dyn11/Yd11', duration:'31:30' },
          { page:8, title:'变压器并联运行条件', duration:'27:50' },
          { page:11,title:'同步发电机结构与电枢绕组', duration:'29:00' },
          { page:15,title:'同步发电机V型曲线与功率角特性', duration:'30:20' },
          { page:19,title:'同步发电机准同期并网条件与步骤', duration:'28:50' },
          { page:23,title:'异步电机结构与旋转磁场', duration:'27:40' },
          { page:25,title:'异步电机T型等效电路与转差率', duration:'31:10' },
          { page:28,title:'异步电机直接启动电流 + 星三角/自耦降压', duration:'29:30' },
          { page:31,title:'直流电机电枢绕组、励磁方式与电势公式', duration:'28:10' }
        ],
        playlist: [
          {page:1,title:'磁路欧姆定律与铁磁材料',duration:'28:40'},{page:2,title:'交流磁路涡流与磁滞损耗',duration:'27:30'},
          {page:3,title:'单相变压器空载与励磁阻抗',duration:'30:10'},{page:4,title:'变压器绕组折算',duration:'29:40'},
          {page:5,title:'变压器负载等效电路与电压调整率',duration:'29:20'},
          {page:6,title:'三相变压器联结组别判定',duration:'31:30'},{page:7,title:'变压器空载短路试验',duration:'28:50'},
          {page:8,title:'并联运行与负载分配',duration:'27:50'},{page:9,title:'自耦变压器与互感器',duration:'26:30'},
          {page:10,title:'变压器损耗与效率',duration:'25:10'},
          {page:11,title:'同步发电机结构与电枢绕组',duration:'29:00'},{page:12,title:'空载电势与电枢反应',duration:'30:20'},
          {page:13,title:'同步发电机电压方程式与相量图',duration:'28:50'},{page:14,title:'功角特性与静态稳定',duration:'31:40'},
          {page:15,title:'V型曲线与励磁调节',duration:'30:20'},{page:16,title:'同步发电机短路比与参数',duration:'27:10'},
          {page:17,title:'同步发电机不对称短路-对称分量法',duration:'32:00'},{page:18,title:'同步电机损耗与效率',duration:'25:30'},
          {page:19,title:'同步发电机准同期并列',duration:'28:50'},{page:20,title:'整步表法与自同期',duration:'26:40'},
          {page:21,title:'突然短路物理过程',duration:'29:20'},{page:22,title:'同步发电机灭磁与灭磁电阻',duration:'24:30'},
          {page:23,title:'异步电机结构与旋转磁场',duration:'27:40'},{page:24,title:'转差率与转矩公式',duration:'28:30'},
          {page:25,title:'T型等效电路及简化',duration:'31:10'},{page:26,title:'异步电机功率平衡与转矩转速特性',duration:'29:50'},
          {page:27,title:'最大转矩、启动转矩、临界转差率',duration:'28:40'},
          {page:28,title:'异步电机启动方法与电流计算',duration:'29:30'},{page:29,title:'绕线转子串电阻启动与调速',duration:'28:20'},
          {page:30,title:'变频调速与变极调速、能耗反接制动',duration:'29:00'},
          {page:31,title:'直流电机结构与电枢绕组',duration:'28:10'},{page:32,title:'直流发电机电势与转矩',duration:'26:50'},
          {page:33,title:'直流电动机调速-电枢串阻/弱磁/降压',duration:'27:30'},
          {page:34,title:'电动机选择 + 电机学总复习',duration:'25:00'}
        ]
      }]
    },
    power: {
      title: '电气工程基础',
      short: '电气工程基础',
      color: 'power',
      totalHours: '≈ 16 h 43 m',
      pdQuestions: '供配电约18~20题 (36~40分，占下午段1/3)',
      ptQuestions: '发输变电约22~24题 (44~48分，发输变电下午段重头戏)',
      collections: [{
        bvid: 'BV1GL411y7Sb', label: '电气工程基础 精讲班', duration: '16h43m', totalPages: 41,
        chapters: [
          { idx:1, name:'电力系统基本概念 + 接线方式', pages:[1,4], lectures:'第1~4讲', weight:'★★★' },
          { idx:2, name:'电力系统元件参数与等值电路', pages:[5,8], lectures:'第5~8讲', weight:'★★★★' },
          { idx:3, name:'潮流计算(手算) + 有功无功平衡', pages:[9,15], lectures:'第9~15讲', weight:'★★★★★' },
          { idx:4, name:'电压调整与频率调整', pages:[16,19], lectures:'第16~19讲', weight:'★★★★★' },
          { idx:5, name:'短路电流计算 (标幺制 运算曲线)', pages:[20,26], lectures:'第20~26讲', weight:'★★★★★' },
          { idx:6, name:'电气设备选择与校验', pages:[27,30], lectures:'第27~30讲', weight:'★★★★' },
          { idx:7, name:'继电保护基础', pages:[31,35], lectures:'第31~35讲', weight:'★★★★' },
          { idx:8, name:'过电压保护与接地', pages:[36,39], lectures:'第36~39讲', weight:'★★★' },
          { idx:9, name:'二次回路与直流系统 + 总复习', pages:[40,41], lectures:'第40~41讲', weight:'★★★' }
        ],
        episodes: [
          { page:2, title:'主接线形式单母线/双母线/桥形/单元接线 对比与适用场景', duration:'25:30' },
          { page:5, title:'线路/变压器/发电机/负荷 参数标幺值与基准换算', duration:'27:10' },
          { page:9, title:'开式网潮流手算 (已知末端求首端)', duration:'28:40' },
          { page:12,title:'闭式网初步潮流 自然分布与强制分布', duration:'26:50' },
          { page:16,title:'电压调整4手段：分接头/电容器/调相机/无功补偿', duration:'29:10' },
          { page:20,title:'短路基本概念 + 无限大容量系统短路电流周期/非周期分量', duration:'30:30' },
          { page:23,title:'标幺制下短路电流计算步骤 + 运算曲线查短路冲击系数', duration:'31:00' },
          { page:27,title:'断路器/隔离开关/CT/PT/母线/电缆 选择与校验六条件', duration:'28:20' },
          { page:31,title:'三段式电流保护(速断/限时速断/过电流)整定原则', duration:'29:50' },
          { page:36,title:'雷电过电压 + 操作过电压 + 避雷器 + 接地电阻计算', duration:'27:30' }
        ],
        playlist: [
          {page:1,title:'电力系统分级、额定电压与频率',duration:'22:40'},{page:2,title:'主接线典型形式',duration:'25:30'},
          {page:3,title:'主接线可靠性与经济性对比',duration:'23:10'},{page:4,title:'中性点运行方式',duration:'24:00'},
          {page:5,title:'元件参数标幺值换算',duration:'27:10'},{page:6,title:'变压器Π型等值电路',duration:'26:30'},
          {page:7,title:'线路等值与长线路修正',duration:'24:50'},{page:8,title:'负荷模型与系统等值',duration:'24:30'},
          {page:9,title:'开式网潮流手算-末端已知',duration:'28:40'},{page:10,title:'开式网潮流-首端已知',duration:'26:20'},
          {page:11,title:'电压降落纵轴横轴分量',duration:'25:10'},{page:12,title:'闭式网初步潮流',duration:'26:50'},
          {page:13,title:'闭式网最终潮流修正',duration:'27:30'},{page:14,title:'有功平衡与频率一次调整',duration:'25:40'},
          {page:15,title:'频率二次调整与经济调度',duration:'24:30'},
          {page:16,title:'电压调整4手段',duration:'29:10'},{page:17,title:'变压器分接头选择',duration:'28:20'},
          {page:18,title:'无功补偿容量计算',duration:'26:50'},{page:19,title:'有载调压变压器',duration:'24:10'},
          {page:20,title:'短路物理过程与周期非周期分量',duration:'30:30'},{page:21,title:'冲击系数与冲击电流ich',duration:'28:50'},
          {page:22,title:'短路容量与MVA基准',duration:'26:20'},{page:23,title:'标幺制短路计算完整步骤',duration:'31:00'},
          {page:24,title:'运算曲线法',duration:'29:10'},{page:25,title:'不对称短路-对称分量',duration:'30:30'},
          {page:26,title:'单相接地/两相短路/两相接地短路',duration:'27:40'},
          {page:27,title:'电气设备选择六条件',duration:'28:20'},{page:28,title:'高压断路器参数与校验',duration:'25:50'},
          {page:29,title:'CT PT 误差与准确级',duration:'27:30'},{page:30,title:'电缆热稳定与动稳定',duration:'25:10'},
          {page:31,title:'继电保护四性与三段电流',duration:'29:50'},{page:32,title:'距离保护基本原理',duration:'26:40'},
          {page:33,title:'差动保护原理',duration:'25:30'},{page:34,title:'变压器保护配置',duration:'26:50'},
          {page:35,title:'发电机-变压器组保护',duration:'25:00'},
          {page:36,title:'过电压与避雷器',duration:'27:30'},{page:37,title:'操作过电压-切除空载线路/变压器',duration:'24:50'},
          {page:38,title:'工频过电压与谐振过电压',duration:'25:20'},{page:39,title:'接地电阻计算-保护接地/工作接地',duration:'26:10'},
          {page:40,title:'二次回路-断路器控制与信号',duration:'24:50'},{page:41,title:'直流系统绝缘监察 + 总复习',duration:'23:40'}
        ]
      }]
    },
    calculator: {
      title: '计算器使用技巧 (科学计算器/卡西欧991ES)',
      short: '计算器技巧',
      color: 'common',
      totalHours: '约 1~2 小时',
      pdQuestions: '全下午段都要用到，尤其是复数、方程求解、积分',
      ptQuestions: '同左',
      collections: [{
        bvid: 'BV1VM4y127oJ', label: '科学计算器应试技巧', duration: '≈1h40m', totalPages: 5,
        chapters: [
          { idx:1, name:'基本运算+存储变量A~F', pages:[1], lectures:'P1', weight:'★★★' },
          { idx:2, name:'复数模式 CMPLX 相量计算', pages:[2], lectures:'P2', weight:'★★★★★ (电路/潮流必用)' },
          { idx:3, name:'方程模式 EQN 二元/三元一次/二次/三次方程', pages:[3], lectures:'P3', weight:'★★★★' },
          { idx:4, name:'矩阵模式 MAT 联立方程 + 向量', pages:[4], lectures:'P4', weight:'★★★' },
          { idx:5, name:'积分 ∫ / 微分 d/dx / 求和 Σ / 统计 SD 模式', pages:[5], lectures:'P5', weight:'★★★★' }
        ],
        episodes: [
          { page:2, title:'CMPLX 模式：相量加减乘除+极坐标↔直角坐标互化', duration:'18:00' },
          { page:3, title:'EQN 模式：解三次方程+解联立三元一次(节点电压法)', duration:'22:00' },
          { page:5, title:'积分模式：快速手算复杂积分题目', duration:'16:00' }
        ],
        playlist: [
          {page:1,title:'基础运算与存储变量',duration:'15:00'},
          {page:2,title:'CMPLX复数相量模式',duration:'18:00'},
          {page:3,title:'EQN方程模式',duration:'22:00'},
          {page:4,title:'MAT矩阵向量模式',duration:'14:00'},
          {page:5,title:'积分微分求和统计模式',duration:'16:00'}
        ]
      }]
    },
    newCircuit2026: {
      title: '2026 新版电路精讲（你提供的BV）',
      short: '2026新版电路',
      color: 'circuit',
      totalHours: '≈ 7 讲',
      pdQuestions: '电路学科最新补充版，建议配合主BV1yL411R7rr使用',
      ptQuestions: '同左',
      collections: [{
        bvid: 'BV16KTX6eE3K', label: '2026新版 电路专题 7讲', duration: '详见各P', totalPages: 7,
        chapters: [
          { idx:1, name:'2026电路新版第一章', pages:[1], lectures:'P1', weight:'★★★' },
          { idx:2, name:'2026电路新版第二章', pages:[2], lectures:'P2', weight:'★★★' },
          { idx:3, name:'2026电路新版第三章', pages:[3], lectures:'P3', weight:'★★★' },
          { idx:4, name:'2026电路新版第四章', pages:[4], lectures:'P4', weight:'★★★' },
          { idx:5, name:'2026电路新版第五章', pages:[5], lectures:'P5', weight:'★★★' },
          { idx:6, name:'2026电路新版第六章', pages:[6], lectures:'P6', weight:'★★★' },
          { idx:7, name:'2026电路新版第七章 (综合)', pages:[7], lectures:'P7', weight:'★★★' }
        ],
        episodes: [
          { page:1, title:'2026新版电路 P1', duration:'参见原视频' },
          { page:2, title:'2026新版电路 P2', duration:'参见原视频' },
          { page:3, title:'2026新版电路 P3', duration:'参见原视频' },
          { page:4, title:'2026新版电路 P4', duration:'参见原视频' },
          { page:5, title:'2026新版电路 P5', duration:'参见原视频' },
          { page:6, title:'2026新版电路 P6', duration:'参见原视频' },
          { page:7, title:'2026新版电路 P7 综合复习', duration:'参见原视频' }
        ],
        playlist: [
          {page:1,title:'2026新版电路 P1',duration:''},{page:2,title:'2026新版电路 P2',duration:''},
          {page:3,title:'2026新版电路 P3',duration:''},{page:4,title:'2026新版电路 P4',duration:''},
          {page:5,title:'2026新版电路 P5',duration:''},{page:6,title:'2026新版电路 P6',duration:''},
          {page:7,title:'2026新版电路 P7 综合',duration:''}
        ]
      }]
    }
  };

  /* 姜小白公共基础10科精讲班 - 分章节结构 */
  /* 姜小白公共基础精讲班 - 14学科58讲 (对齐 ee-pro-exam-site-2026) */
  function jiangxiaobaiSeries(){
    var fullPlaylist = [
      {page:1,title:'数学1-空间解析几何(一)',duration:''},
      {page:2,title:'数学2-空间解析几何(二)',duration:''},
      {page:3,title:'数学3-函数极限连续(一)',duration:''},
      {page:4,title:'数学4-函数极限连续(二)',duration:''},
      {page:5,title:'数学5-导数与微分(一)',duration:''},
      {page:6,title:'数学6-导数与微分(二)',duration:''},
      {page:7,title:'数学7-积分学(一)',duration:''},
      {page:8,title:'数学8-积分学(二)',duration:''},
      {page:9,title:'数学9-积分学(三)',duration:''},
      {page:10,title:'数学10-微分方程',duration:''},
      {page:11,title:'数学11-无穷级数(一)',duration:''},
      {page:12,title:'数学12-无穷级数(二)',duration:''},
      {page:13,title:'数学13-线性代数(一)',duration:''},
      {page:14,title:'数学14-线性代数(二)',duration:''},
      {page:15,title:'数学15-线性代数(三)',duration:''},
      {page:16,title:'数学16-概率统计(一)',duration:''},
      {page:17,title:'数学17-概率统计(二)',duration:''},
      {page:18,title:'数学18-概率统计(三)',duration:''},
      {page:19,title:'物理1-热力学(一)',duration:''},
      {page:20,title:'物理2-热力学(二)',duration:''},
      {page:21,title:'物理3-波动学',duration:''},
      {page:22,title:'物理4-光学(一)',duration:''},
      {page:23,title:'物理5-光学(二)',duration:''},
      {page:24,title:'化学1-原子分子结构(一)',duration:''},
      {page:25,title:'化学2-原子分子结构(二)',duration:''},
      {page:26,title:'化学2-原子分子结构(二)续',duration:''},
      {page:27,title:'化学3-化学反应速率',duration:''},
      {page:28,title:'化学4-溶液',duration:''},
      {page:29,title:'化学5-氧化还原反应',duration:''},
      {page:30,title:'化学6-有机化学',duration:''},
      {page:31,title:'工程经济1-资金等值财务评价',duration:''},
      {page:32,title:'工程经济2-方案比选',duration:''},
      {page:33,title:'工程经济3-不确定性分析',duration:''},
      {page:34,title:'信号1-信号概念分类',duration:''},
      {page:35,title:'信号2-模拟信号与信息',duration:''},
      {page:36,title:'信号3-数字信号与信息',duration:''},
      {page:37,title:'电工1-电磁场',duration:''},
      {page:38,title:'电工2-电路基础(一)',duration:''},
      {page:39,title:'电工3-电路基础(二)',duration:''},
      {page:40,title:'电工4-电路基础(三)',duration:''},
      {page:41,title:'电工5-电路基础(四)',duration:''},
      {page:42,title:'电工6-电动机与变压器',duration:''},
      {page:43,title:'电工7-模拟电子技术(一)',duration:''},
      {page:44,title:'电工8-模拟电子技术(二)',duration:''},
      {page:45,title:'电工9-模拟电子技术(三)',duration:''},
      {page:46,title:'电工10-数字电子技术(一)',duration:''},
      {page:47,title:'电工11-数字电子技术(二)',duration:''},
      {page:48,title:'理论力学1-静力学(上)',duration:''},
      {page:49,title:'理论力学2-静力学(下)',duration:''},
      {page:50,title:'理论力学3-运动学',duration:''},
      {page:51,title:'理论力学4-动力学(上)',duration:''},
      {page:52,title:'理论力学5-动力学(中)',duration:''},
      {page:53,title:'信息1-计算机基础与网络',duration:''},
      {page:54,title:'信息2-信息安全与数据库',duration:''},
      {page:55,title:'信息3-数值计算',duration:''},
      {page:56,title:'工程经济4-资金时间价值与等值计算',duration:''},
      {page:57,title:'工程经济5-经济评价与不确定性分析',duration:''},
      {page:58,title:'法规1-招投标与合同法',duration:''}
    ];

    var defs = [
      {key:'math',title:'高等数学',short:'高等数学',pages:[1,2,3,4,5,6,7,8,9,10,11,12]},
      {key:'linear',title:'线性代数',short:'线性代数',pages:[13,14,15]},
      {key:'probability',title:'概率统计',short:'概率统计',pages:[16,17,18]},
      {key:'physics',title:'普通物理',short:'普通物理',pages:[19,20,21,22,23]},
      {key:'chemistry',title:'普通化学',short:'普通化学',pages:[24,25,26,27,28,29,30]},
      {key:'mech',title:'理论力学',short:'理论力学',pages:[48,49,50,51,52]},
      {key:'econ',title:'工程经济',short:'工程经济',pages:[31,32,33,56,57]},
      {key:'signal',title:'信号与信息基础',short:'信号与信息基础',pages:[34,35,36,53,54,55]},
      {key:'emf',title:'电磁场',short:'电磁场',pages:[37]},
      {key:'circuit',title:'电路基础',short:'电路基础',pages:[38,39,40,41]},
      {key:'motor',title:'电机与变压器',short:'电机与变压器',pages:[42]},
      {key:'analog',title:'模拟电子技术',short:'模拟电子技术',pages:[43,44,45]},
      {key:'digital',title:'数字电子技术',short:'数字电子技术',pages:[46,47]},
      {key:'law',title:'法律法规',short:'法律法规',pages:[58]}
    ];

    var subjects = {};
    defs.forEach(function(def){
      var pl = fullPlaylist.filter(function(x){ return def.pages.indexOf(x.page) >= 0; });
      var chapters = def.pages.map(function(p, i){
        var t = pl[i] ? pl[i].title : ('P' + p);
        var shortName = t.replace(/[（(].*?[）)]/g, '').replace(/^[^-]+-/, '');
        return {
          idx: i + 1,
          name: shortName || ('第' + (i+1) + '讲'),
          pages: [p, p],
          lectures: 'P' + p,
          weight: '★★★'
        };
      });
      subjects[def.key] = {
        title: def.title,
        short: def.short,
        color: 'common',
        totalPages: def.pages.length,
        collections: [{
          bvid: 'BV1BaJFzFERX',
          label: def.title + ' ' + def.pages.length + '讲',
          duration: '',
          totalPages: def.pages.length,
          chapters: chapters,
          episodes: pl.slice(0, Math.min(4, pl.length)),
          playlist: pl
        }]
      };
    });

    return {
      title: '姜小白 公共基础精讲班 (58讲)',
      intro: '姜小白老师系统讲解注册电气工程师公共基础科目共58讲，涵盖高等数学/线性代数/概率统计/普通物理/普通化学/理论力学/工程经济/信号与信息基础/电磁场/电路基础/电机与变压器/模拟电子技术/数字电子技术/法律法规。上午120题240分全覆盖。',
      subjects: subjects
    };
  }

  /* 张工教育 历年真题讲解视频 (B站搜索确认) */
  function zhanggongZhentiSeries(){
    var zhentiPlaylist=[
      {page:1,title:'2024年基础考试 专业基础(供配电+发输变电)真题对答案 1:24:15',duration:'1:24:15'},
      {page:2,title:'2024年基础考试 公共基础真题对答案 1:22:25',duration:'1:22:25'},
      {page:3,title:'2024年供配电基础考试真题分析',duration:'33:10'},
      {page:4,title:'2024年发输变电基础考试真题分析',duration:'33:10'},
      {page:5,title:'2023年发输变电基础考试真题讲解',duration:'18:16'},
      {page:6,title:'2023年发输变电基础考试 19-24题真题讲解',duration:'10:42'},
      {page:7,title:'2023年供配电基础考试考后对答案 1:27:27',duration:'1:27:27'}
    ];
    return {
      title: '张工教育 · 历年真题讲解与考后对答案',
      intro: '张工教育官方B站账号"张工注册电气工程师"(space.bilibili.com/1801904672)发布的历年基础考试真题讲解、考后对答案与真题分析视频。建议精讲班学完后第二轮刷真题时使用，每条视频点击后站内直放。',
      subjects: {
        zhenti2024: {
          title:'2024年真题', short:'2024真题', color:'power',
          totalHours:'约3h', qCountPD:'2024全卷对答案', qCountPT:'2024全卷对答案',
          collections:[{
            bvid:'BV1o3D8YyEJB', label:'2024年基础考试专业基础真题对答案(供配电+发输变电)', duration:'1:24:15', totalPages:1,
            chapters:[{idx:1,name:'2024年下午专业基础60题全卷对答案',pages:[1,1],lectures:'全片',weight:'★★★★★'}],
            episodes:[{page:1,title:'2024年基础考试专业基础真题对答案(供配电+发输变电)',duration:'1:24:15'}],
            playlist:[{page:1,title:'2024年基础考试专业基础真题对答案(供配电+发输变电)',duration:'1:24:15'}]
          }]
        },
        zhenti2024Pub: {
          title:'2024年公共基础真题', short:'2024公共基础', color:'common',
          totalHours:'约1.5h', qCountPD:'2024上午对答案', qCountPT:'2024上午对答案',
          collections:[{
            bvid:'BV1nSmoYXEKS', label:'2024年公共基础考试真题对答案', duration:'1:22:25', totalPages:1,
            chapters:[{idx:1,name:'2024年上午公共基础120题对答案',pages:[1,1],lectures:'全片',weight:'★★★★★'}],
            episodes:[{page:1,title:'2024年勘察设计考试公共基础考试真题对答案',duration:'1:22:25'}],
            playlist:[{page:1,title:'2024年公共基础考试真题对答案',duration:'1:22:25'}]
          }]
        },
        zhenti2024Analysis: {
          title:'2024年真题分析', short:'2024分析', color:'circuit',
          totalHours:'约1h', qCountPD:'考情分析', qCountPT:'考情分析',
          collections:[{
            bvid:'BV1ePmZYVEEq', label:'2024年供配电基础考试真题分析', duration:'33:10', totalPages:1,
            chapters:[{idx:1,name:'供配电方向考情分析+重点题目',pages:[1,1],lectures:'全片',weight:'★★★★'}],
            episodes:[{page:1,title:'2024年注册电气工程师供配电基础考试真题分析',duration:'33:10'}],
            playlist:[{page:1,title:'2024年供配电基础考试真题分析',duration:'33:10'}]
          },
          {
            bvid:'BV1dfmoY1EEu', label:'2024年发输变电基础考试真题分析', duration:'33:10', totalPages:1,
            chapters:[{idx:1,name:'发输变电方向考情分析+重点题目',pages:[1,1],lectures:'全片',weight:'★★★★'}],
            episodes:[{page:1,title:'2024年注册电气工程师发输变电基础考试真题分析',duration:'33:10'}],
            playlist:[{page:1,title:'2024年发输变电基础考试真题分析',duration:'33:10'}]
          }]
        },
        zhenti2023: {
          title:'2023年真题', short:'2023真题', color:'analog',
          totalHours:'约2h', qCountPD:'2023全卷', qCountPT:'2023全卷',
          collections:[
          {
            bvid:'BV1Unq8YhEze', label:'2023年发输变电基础考试真题讲解', duration:'18:16', totalPages:1,
            chapters:[{idx:1,name:'2023年发输变电基础真题逐题讲解',pages:[1,1],lectures:'全片',weight:'★★★★★'}],
            episodes:[{page:1,title:'注册电气工程师发输变电基础考试2023年真题讲解',duration:'18:16'}],
            playlist:[{page:1,title:'2023年发输变电基础考试真题讲解',duration:'18:16'}]
          },
          {
            bvid:'BV1MJq8YAE12', label:'2023年发输变电基础 19-24题真题讲解', duration:'10:42', totalPages:1,
            chapters:[{idx:1,name:'2023年发输变电基础19~24题(电气工程基础重点题)',pages:[1,1],lectures:'全片',weight:'★★★★'}],
            episodes:[{page:1,title:'2023年发输变电基础考试19-24题真题讲解',duration:'10:42'}],
            playlist:[{page:1,title:'2023年发输变电基础19-24题真题讲解',duration:'10:42'}]
          },
          {
            bvid:'BV1ae411D73t', label:'2023年供配电考后对答案', duration:'1:27:27', totalPages:1,
            chapters:[{idx:1,name:'2023年供配电基础考试全卷对答案',pages:[1,1],lectures:'全片',weight:'★★★★★'}],
            episodes:[{page:1,title:'2023年张工供配电考后对答案',duration:'1:27:27'}],
            playlist:[{page:1,title:'2023年供配电考后对答案',duration:'1:27:27'}]
          }]
        }
      }
    };
  }

  /* 组装双方向数据：只保留 张工精讲 + 姜小白公共基础 + 张工真题 三个系列 */
  function buildSeries(){
    return {
      zhanggong:{
        title:'张工教育 · 专业基础精讲五学科合集',
        badges:['zg','official'],
        intro: ZHANGGONG_INTRO,
        subjects: zhanggongSubjects
      },
      jiangxiaobai: jiangxiaobaiSeries(),
      zhanggongZhenti: zhanggongZhentiSeries()
    };
  }

  window.VIDEOS_META = {
    summary: {
      totalSeries: 3,
      zhanggongSubjects: 5,
      zhanggongExtra: 2,
      zhentiVideos: 7,
      jiangxiaobaiEpisodes: 58,
      zhanggongHours: 88
    }
  };
  window.VIDEOS = {
    powerDistribution: buildSeries(false),
    powerTransmission: buildSeries(true)
  };
})();
