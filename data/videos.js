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
          bvid: 'BV1yL411R7rr', label: '电路部分 精讲', duration: '20h24m', totalPages: 9,
          chapters: [
            { idx: 1, name: '电路的基本概念和定律', pages: [1,1], lectures: 'P1 (3h28m)', weight: '★★★' },
            { idx: 2, name: '电路的分析方法', pages: [2,4], lectures: 'P2~P4 (6h33m)', weight: '★★★★★' },
            { idx: 3, name: '正弦电流电路', pages: [5,6], lectures: 'P5~P6 (4h15m)', weight: '★★★★★' },
            { idx: 4, name: '非正弦周期电路', pages: [7,7], lectures: 'P7 (2h02m)', weight: '★★★' },
            { idx: 5, name: '动态电路的时域分析', pages: [8,9], lectures: 'P8~P9 (4h08m)', weight: '★★★★' }
          ],
          episodes: [
            { page:1, title:'电路01-电路的基本概念和定律（一）', duration:'3:27:29' },
            { page:2, title:'电路02-电路的分析方法（一）', duration:'2:09:58' },
            { page:5, title:'电路05-正弦电流电路（一）', duration:'2:01:32' },
            { page:8, title:'电路08-动态电路的时域分析（一）', duration:'2:04:26' }
          ],
          playlist: [
            {page:1,title:'电路01-电路的基本概念和定律（一）',duration:'3:27:29'},
            {page:2,title:'电路02-电路的分析方法（一）',duration:'2:09:58'},
            {page:3,title:'电路03-电路的分析方法（二）',duration:'2:16:27'},
            {page:4,title:'电路04-电路的分析方法（三）',duration:'2:06:09'},
            {page:5,title:'电路05-正弦电流电路（一）',duration:'2:01:32'},
            {page:6,title:'电路06-正弦电流电路（二）',duration:'2:13:08'},
            {page:7,title:'电路07-非正弦周期电路',duration:'2:01:45'},
            {page:8,title:'电路08-动态电路的时域分析（一）',duration:'2:04:26'},
            {page:9,title:'电路09-动态电路的时域分析（二）',duration:'2:03:08'}
          ]
        },
        {
          bvid: 'BV1S24y1x7Rd', label: '电磁场部分 辅助 (张工专题)', duration: '8h28m', totalPages: 4,
          chapters: [
            { idx: 1, name: '电磁场及高斯定理', pages: [1,1], lectures: 'P1 (2h09m)', weight: '★★★' },
            { idx: 2, name: '恒定磁场及安培环路定律', pages: [2,2], lectures: 'P2 (2h05m)', weight: '★★★' },
            { idx: 3, name: '无损耗均匀传输线', pages: [3,3], lectures: 'P3 (2h04m)', weight: '★★★' },
            { idx: 4, name: '电磁场系统解题思路讲解', pages: [4,4], lectures: 'P4 (2h11m)', weight: '★★★★' }
          ],
          episodes: [
            { page:1, title:'电磁场01-电磁场及高斯定理', duration:'2:08:38' },
            { page:2, title:'电磁场03-恒定磁场及安培环路定律', duration:'2:05:14' },
            { page:3, title:'电磁场04-无损耗均匀传输线', duration:'2:03:50' },
            { page:4, title:'电磁场05-电磁场系统解题思路讲解', duration:'2:10:35' }
          ],
          playlist: [
            {page:1,title:'电磁场01-电磁场及高斯定理',duration:'2:08:38'},
            {page:2,title:'电磁场03-恒定磁场及安培环路定律',duration:'2:05:14'},
            {page:3,title:'电磁场04-无损耗均匀传输线',duration:'2:03:50'},
            {page:4,title:'电磁场05-电磁场系统解题思路讲解',duration:'2:10:35'}
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
        bvid: 'BV1nT411B7j5', label: '模电 精讲班', duration: '12h46m', totalPages: 6,
        chapters: [
          { idx: 1, name: '二极管及稳压管', pages:[1,1], lectures:'P1 (2h05m)', weight:'★★★' },
          { idx: 2, name: '三极管与静态分析', pages:[2,2], lectures:'P2 (2h18m)', weight:'★★★★★' },
          { idx: 3, name: '三极管交流等效电路分析与反馈', pages:[3,3], lectures:'P3 (2h04m)', weight:'★★★★★' },
          { idx: 4, name: '理想运放特性分析', pages:[4,4], lectures:'P4 (2h02m)', weight:'★★★★' },
          { idx: 5, name: '功放及波形发生器与稳压模块', pages:[5,5], lectures:'P5 (2h13m)', weight:'★★★' },
          { idx: 6, name: '模拟电子系统解题思路讲解', pages:[6,6], lectures:'P6 (2h03m)', weight:'★★★★' }
        ],
        episodes: [
          { page:1, title:'模电01-二极管及稳压管', duration:'2:05:16' },
          { page:2, title:'模电02-三极管与静态分析', duration:'2:18:20' },
          { page:4, title:'模电04-理想运放特性分析', duration:'2:02:19' },
          { page:6, title:'模电06-模拟电子系统解题思路讲解', duration:'2:02:53' }
        ],
        playlist: [
          {page:1,title:'模电01-二极管及稳压管',duration:'2:05:16'},
          {page:2,title:'模电02-三极管与静态分析',duration:'2:18:20'},
          {page:3,title:'模电03-三极管交流等效电路分析与反馈',duration:'2:04:14'},
          {page:4,title:'模电04-理想运放特性分析',duration:'2:02:19'},
          {page:5,title:'模电05-功放及波形发生器与稳压模块',duration:'2:13:02'},
          {page:6,title:'模电06-模拟电子系统解题思路讲解',duration:'2:02:53'}
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
          { idx:1, name:'数字电路基础、门电路', pages:[1], lectures:'P1 (2h08m)', weight:'★★★' },
          { idx:2, name:'数字基础及逻辑化简', pages:[2], lectures:'P2 (2h14m)', weight:'★★★★' },
          { idx:3, name:'组合逻辑电路', pages:[3], lectures:'P3 (2h23m)', weight:'★★★★★' },
          { idx:4, name:'触发器、时序逻辑电路', pages:[4], lectures:'P4 (2h02m)', weight:'★★★★★' },
          { idx:5, name:'脉冲波形电路', pages:[5], lectures:'P5 (2h16m)', weight:'★★★' },
          { idx:6, name:'数模-模数转换', pages:[6], lectures:'P6 (2h06m)', weight:'★★★' }
        ],
        episodes: [
          { page:1, title:'数电1-数字电路基础、门电路', duration:'2:07:47' },
          { page:3, title:'数电3-组合逻辑电路', duration:'2:23:07' },
          { page:4, title:'数电4-触发器、时序逻辑电路', duration:'2:01:57' },
          { page:6, title:'数电6-数模-模数转换', duration:'2:06:08' }
        ],
        playlist: [
          {page:1,title:'数电1-数字电路基础、门电路',duration:'2:07:47'},
          {page:2,title:'数电2-数字基础及逻辑化简',duration:'2:14:25'},
          {page:3,title:'数电3-组合逻辑电路',duration:'2:23:07'},
          {page:4,title:'数电4-触发器、时序逻辑电路',duration:'2:01:57'},
          {page:5,title:'数电5-脉冲波形电路',duration:'2:15:52'},
          {page:6,title:'数电6-数模-模数转换',duration:'2:06:08'}
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
        bvid: 'BV1gN411w7ZW', label: '电机学 精讲班', duration: '16h26m', totalPages: 7,
        chapters: [
          { idx:1, name:'变压器（一）（二）', pages:[1,2], lectures:'P1~P2 (4h45m)', weight:'★★★★' },
          { idx:2, name:'感应电动机（一）（二）', pages:[3,4], lectures:'P3~P4 (4h44m)', weight:'★★★★★' },
          { idx:3, name:'同步电机（一）（二）', pages:[5,6], lectures:'P5~P6 (4h28m)', weight:'★★★★★' },
          { idx:4, name:'直流电机', pages:[7,7], lectures:'P7 (2h29m)', weight:'★★★' }
        ],
        episodes: [
          { page:1, title:'电气01-变压器（一）', duration:'2:23:07' },
          { page:3, title:'电气03-感应电动机（一）', duration:'2:34:56' },
          { page:5, title:'电气05-同步电机(一)', duration:'2:25:34' },
          { page:7, title:'电气07-直流电机', duration:'2:28:51' }
        ],
        playlist: [
          {page:1,title:'电气01-变压器（一）',duration:'2:23:07'},
          {page:2,title:'电气02-变压器（二）',duration:'2:21:28'},
          {page:3,title:'电气03-感应电动机（一）',duration:'2:34:56'},
          {page:4,title:'电气04-感应电动机（二）',duration:'2:09:16'},
          {page:5,title:'电气05-同步电机(一)',duration:'2:25:34'},
          {page:6,title:'电气06-同步电机（二）',duration:'2:02:47'},
          {page:7,title:'电气07-直流电机',duration:'2:28:51'}
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
        bvid: 'BV1GL411y7Sb', label: '电气工程基础 精讲班', duration: '16h43m', totalPages: 8,
        chapters: [
          { idx:1, name:'电力线路、变压器的参数与等值电路', pages:[1,1], lectures:'P1 (2h03m)', weight:'★★★★' },
          { idx:2, name:'简单电网的潮流计算', pages:[2,2], lectures:'P2 (2h05m)', weight:'★★★★★' },
          { idx:3, name:'无功功率平衡和电压调整', pages:[3,3], lectures:'P3 (2h15m)', weight:'★★★★★' },
          { idx:4, name:'短路电流计算（一）（二）', pages:[4,5], lectures:'P4~P5 (4h14m)', weight:'★★★★★' },
          { idx:5, name:'过电压绝缘配合', pages:[6,6], lectures:'P6 (2h06m)', weight:'★★★' },
          { idx:6, name:'断路器及互感器', pages:[7,7], lectures:'P7 (2h00m)', weight:'★★★★' },
          { idx:7, name:'电气主接线和电气设备选择', pages:[8,8], lectures:'P8 (2h00m)', weight:'★★★★' }
        ],
        episodes: [
          { page:1, title:'电气09-电力线路、变压器的参数与等值电路', duration:'2:03:19' },
          { page:2, title:'电气10-简单电网的潮流计算', duration:'2:04:46' },
          { page:4, title:'电气12-短路电流计算（一）', duration:'2:09:36' },
          { page:8, title:'电气16-电气主接线和电气设备选择', duration:'1:59:58' }
        ],
        playlist: [
          {page:1,title:'电气09-电力线路、变压器的参数与等值电路',duration:'2:03:19'},
          {page:2,title:'电气10-简单电网的潮流计算',duration:'2:04:46'},
          {page:3,title:'电气11-无功功率平衡和电压调整',duration:'2:14:47'},
          {page:4,title:'电气12-短路电流计算（一）',duration:'2:09:36'},
          {page:5,title:'电气13-短路电流计算（二）',duration:'2:04:32'},
          {page:6,title:'电气14-过电压绝缘配合',duration:'2:06:24'},
          {page:7,title:'电气15-断路器及互感器',duration:'2:00:00'},
          {page:8,title:'电气16-电气主接线和电气设备选择',duration:'1:59:58'}
        ]
      }]
    },
    calculator: {
      title: '计算器使用技巧 (卡西欧 fx-991CN X)',
      short: '计算器技巧',
      color: 'common',
      totalHours: '官方11段 + B站权威 41:33',
      pdQuestions: '全下午段都要用到，尤其是复数、方程求解、积分',
      ptQuestions: '同左',
      collections: [
        {
          bvid: 'CASIO-FX-991CN-X', label: 'Casio 官方操作视频 (P1-P11)', duration: '11段', totalPages: 11, isMP4: true,
          chapters: [
            { idx:1, name:'综合介绍与基本计算 (COMP)', pages:[1], lectures:'P1', weight:'★★★★' },
            { idx:2, name:'复数运算 (CMPLX)', pages:[2], lectures:'P2', weight:'★★★' },
            { idx:3, name:'统计计算 (STAT)', pages:[3], lectures:'P3', weight:'★★★' },
            { idx:4, name:'[链接失效] 进制转换 (BASE-N)', pages:[4], lectures:'P4', weight:'-' },
            { idx:5, name:'方程求解 (EQN)', pages:[5], lectures:'P5', weight:'★★★' },
            { idx:6, name:'矩阵运算 (MATRIX)', pages:[6], lectures:'P6', weight:'★★★' },
            { idx:7, name:'函数表格 (TABLE)', pages:[7], lectures:'P7', weight:'★★' },
            { idx:8, name:'不等式 (INEQ)', pages:[8], lectures:'P8', weight:'★★' },
            { idx:9, name:'比例式 (RATIO)', pages:[9], lectures:'P9', weight:'★★' },
            { idx:10, name:'分布计算 (DIST)', pages:[10], lectures:'P10', weight:'★★' },
            { idx:11, name:'积分微分与综合应用', pages:[11], lectures:'P11', weight:'★★' }
          ],
          episodes: [
            { page:1, title:'P1 综合介绍与基本计算 (COMP)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/25fa7eedvodtransgzp1254069362/fcc083105285890791093193039/v.f10.mp4' },
            { page:2, title:'P2 复数运算 (CMPLX)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/25fa7eedvodtransgzp1254069362/fe9673805285890791093222012/v.f10.mp4' },
            { page:3, title:'P3 统计计算 (STAT)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/e0c5c928vodcq1254069362/d859b7091397757910450058814/THUsfLgHEA0A.mp4' },
            { page:4, title:'P4 [链接失效] Casio官网404 - 进制转换 (BASE-N)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/25fa7eedvodtransgzp1254069362/febe91375285890791093249575/v.f10.mp4' },
            { page:5, title:'P5 方程求解 (EQN)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/71d2dc45vodgzp1254069362/00f859331397757910457625556/NrYnIlDWjyYA.mp4' },
            { page:6, title:'P6 矩阵运算 (MATRIX)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/25fa7eedvodtransgzp1254069362/00c6f48b5285890791093301556/v.f10.mp4' },
            { page:7, title:'P7 函数表格 (TABLE)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/e0c5c928vodcq1254069362/d85671441397757910450052932/53adYwBxAXgA.mp4' },
            { page:8, title:'P8 不等式 (INEQ)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/71d2dc45vodgzp1254069362/55f3c8ce1397757910448113649/s3SwbRAJEf0A.mp4' },
            { page:9, title:'P9 比例式 (RATIO)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/71d2dc45vodgzp1254069362/03cb18d61397757910457793652/8MIw8yN5to0A.mp4' },
            { page:10, title:'P10 分布计算 (DIST)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/e0c5c928vodcq1254069362/1e8fade51397757910454805050/mJFb3nc4HzQA.mp4' },
            { page:11, title:'P11 积分微分与综合应用', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/71d2dc45vodgzp1254069362/091dbd291397757910447133652/4Ato2cHIVjMA.mp4' }
          ],
          playlist: [
            {page:1, title:'P1 综合介绍与基本计算 (COMP)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/25fa7eedvodtransgzp1254069362/fcc083105285890791093193039/v.f10.mp4'},
            {page:2, title:'P2 复数运算 (CMPLX)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/25fa7eedvodtransgzp1254069362/fe9673805285890791093222012/v.f10.mp4'},
            {page:3, title:'P3 统计计算 (STAT)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/e0c5c928vodcq1254069362/d859b7091397757910450058814/THUsfLgHEA0A.mp4'},
            {page:4, title:'P4 [链接失效] Casio官网404 - 进制转换 (BASE-N)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/25fa7eedvodtransgzp1254069362/febe91375285890791093249575/v.f10.mp4'},
            {page:5, title:'P5 方程求解 (EQN)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/71d2dc45vodgzp1254069362/00f859331397757910457625556/NrYnIlDWjyYA.mp4'},
            {page:6, title:'P6 矩阵运算 (MATRIX)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/25fa7eedvodtransgzp1254069362/00c6f48b5285890791093301556/v.f10.mp4'},
            {page:7, title:'P7 函数表格 (TABLE)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/e0c5c928vodcq1254069362/d85671441397757910450052932/53adYwBxAXgA.mp4'},
            {page:8, title:'P8 不等式 (INEQ)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/71d2dc45vodgzp1254069362/55f3c8ce1397757910448113649/s3SwbRAJEf0A.mp4'},
            {page:9, title:'P9 比例式 (RATIO)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/71d2dc45vodgzp1254069362/03cb18d61397757910457793652/8MIw8yN5to0A.mp4'},
            {page:10, title:'P10 分布计算 (DIST)', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/e0c5c928vodcq1254069362/1e8fade51397757910454805050/mJFb3nc4HzQA.mp4'},
            {page:11, title:'P11 积分微分与综合应用', duration:'', mp4:'https://1254069362.vod2.myqcloud.com/71d2dc45vodgzp1254069362/091dbd291397757910447133652/4Ato2cHIVjMA.mp4'}
          ]
        },
        {
                    bvid: 'BV1gY411L71c', label: 'B站权威教程（司令官123 fx-991升级版）', duration: '41:33', totalPages: 8,
          chapters: [
            { idx:1, name:'按键介绍', pages:[1], lectures:'P1', weight:'★★★★' },
            { idx:2, name:'解方程', pages:[2], lectures:'P2', weight:'★★★★★' },
            { idx:3, name:'复数、幅相计算', pages:[3], lectures:'P3', weight:'★★★★' },
            { idx:4, name:'矩阵和向量', pages:[4], lectures:'P4', weight:'★★★' },
            { idx:5, name:'函数极值', pages:[5], lectures:'P5', weight:'★★★' },
            { idx:6, name:'均值、方差与回归计算', pages:[6], lectures:'P6', weight:'★★★' },
            { idx:7, name:'科学常数', pages:[7], lectures:'P7', weight:'★★' },
            { idx:8, name:'进制转换', pages:[8], lectures:'P8', weight:'★★' }
          ],
          episodes: [
            { page:1, title:'1、按键介绍', duration:'17:05' },
            { page:2, title:'2、解方程', duration:'06:00' },
            { page:3, title:'3、复数、幅相计算', duration:'03:10' },
            { page:4, title:'4、矩阵和向量', duration:'03:50' },
            { page:5, title:'5、函数极值', duration:'04:45' },
            { page:6, title:'6、均值、方差与回归计算', duration:'02:41' },
            { page:7, title:'7、科学常数', duration:'01:38' },
            { page:8, title:'8、进制转换', duration:'02:24' }
          ],
          playlist: [
            {page:1, title:'1、按键介绍', duration:'17:05'},
            {page:2, title:'2、解方程', duration:'06:00'},
            {page:3, title:'3、复数、幅相计算', duration:'03:10'},
            {page:4, title:'4、矩阵和向量', duration:'03:50'},
            {page:5, title:'5、函数极值', duration:'04:45'},
            {page:6, title:'6、均值、方差与回归计算', duration:'02:41'},
            {page:7, title:'7、科学常数', duration:'01:38'},
            {page:8, title:'8、进制转换', duration:'02:24'}
          ]
        }
      ]
    },
    newCircuit2026: {
      title: '2026 新版电路精讲（你提供的BV）',
      short: '2026新版电路',
      color: 'circuit',
      totalHours: '≈ 16 h 40 m',
      pdQuestions: '电路学科最新补充版，建议配合主BV1yL411R7rr使用',
      ptQuestions: '同左',
      collections: [{
        bvid: 'BV16KTX6eE3K', label: '2026新版 电路专题 7讲', duration: '16h40m', totalPages: 7,
        chapters: [
          { idx:1, name:'电路的基本概念和定律（一）（二）', pages:[1,2], lectures:'P1~P2 (4h56m)', weight:'★★★' },
          { idx:2, name:'电路的分析方法（一）', pages:[3,3], lectures:'P3 (2h15m)', weight:'★★★★' },
          { idx:3, name:'正弦电流电路（一）（二）', pages:[4,5], lectures:'P4~P5 (5h26m)', weight:'★★★★★' },
          { idx:4, name:'非正弦周期电路', pages:[6,7], lectures:'P6~P7 (4h02m)', weight:'★★★' }
        ],
        episodes: [
          { page:1, title:'电路1-电路的基本概念和定律(一)', duration:'2:17:02' },
          { page:3, title:'电路3-电路的分析方法(一)', duration:'2:15:04' },
          { page:4, title:'电路5-正弦电流电路(一)', duration:'2:51:31' },
          { page:6, title:'电路7-非正弦周期电路(1)', duration:'2:09:50' }
        ],
        playlist: [
          {page:1,title:'电路1-电路的基本概念和定律(一)',duration:'2:17:02'},
          {page:2,title:'电路2-电路的基本概念和定律(二)',duration:'2:38:40'},
          {page:3,title:'电路3-电路的分析方法(一)',duration:'2:15:04'},
          {page:4,title:'电路5-正弦电流电路(一)',duration:'2:51:31'},
          {page:5,title:'电路6-正弦电流电路(二)',duration:'2:34:39'},
          {page:6,title:'电路7-非正弦周期电路(1)',duration:'2:09:50'},
          {page:7,title:'电路7-非正弦周期电路',duration:'1:52:38'}
        ]
      }]
    }
  };

  /* 姜小白公共基础精讲班 - 13学科52讲 (按B站 BV1BaJFzFERX 实际分P核对，原P53-P58不存在已修正) */
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
      {page:52,title:'理论力学5-动力学(中)',duration:''}
    ];

    var defs = [
      {key:'math',title:'高等数学',short:'高等数学',pages:[1,2,3,4,5,6,7,8,9,10,11,12]},
      {key:'linear',title:'线性代数',short:'线性代数',pages:[13,14,15]},
      {key:'probability',title:'概率统计',short:'概率统计',pages:[16,17,18]},
      {key:'physics',title:'普通物理',short:'普通物理',pages:[19,20,21,22,23]},
      {key:'chemistry',title:'普通化学',short:'普通化学',pages:[24,25,26,27,28,29,30]},
      {key:'mech',title:'理论力学',short:'理论力学',pages:[48,49,50,51,52]},
      {key:'econ',title:'工程经济',short:'工程经济',pages:[31,32,33]},
      {key:'signal',title:'信号与信息基础',short:'信号与信息基础',pages:[34,35,36]},
      {key:'emf',title:'电磁场',short:'电磁场',pages:[37]},
      {key:'circuit',title:'电路基础',short:'电路基础',pages:[38,39,40,41]},
      {key:'motor',title:'电机与变压器',short:'电机与变压器',pages:[42]},
      {key:'analog',title:'模拟电子技术',short:'模拟电子技术',pages:[43,44,45]},
      {key:'digital',title:'数字电子技术',short:'数字电子技术',pages:[46,47]}
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
      title: '姜小白 公共基础精讲班 (52讲)',
      intro: '姜小白老师系统讲解注册电气工程师公共基础科目，本合集实际收录52讲，涵盖高等数学/线性代数/概率统计/普通物理/普通化学/理论力学/工程经济/信号与信息基础/电磁场/电路基础/电机与变压器/模拟电子技术/数字电子技术。注：原目录中的信息技术、工程经济后两讲及法律法规讲在该B站合集中不存在（合集共52P，止于理论力学5），故未收录。',
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
      jiangxiaobaiEpisodes: 52,
      zhanggongHours: 88
    }
  };
  window.VIDEOS = {
    powerDistribution: buildSeries(false),
    powerTransmission: buildSeries(true)
  };
})();
