/* ee-pro-exam v2 data/basic-knowledge.js
   双方向供配电/发输变电 × 公共基础10科 + 专业基础5科
   三层细粒度： subject (学科) → chapter (章) → section (节)
   每节：video锚点(BV+P) + 知识点kps[] + 典型真题 typicalQ[] + 易混淆 easyMistakes[]
         + 计算器技巧 calcTip + 考频频率 freq + 考分/题量
*/
(function(){

  /* ========= 公共基础10科（两个方向相同，精简但章→节结构完整） ========= */
  function commonSubjects(){
    return [
      { key:'math', title:'数学', qCountPD:24, qCountPT:24, color:'common',
        badges:['★★★★★ 24题48分'],
        chapters:[
          {idx:1,name:'空间解析几何 + 线性代数', lectures:'公共基础BV P1~P3', pages:[1,3], weight:'★★★★',
            sections:[
              {idx:1,name:'向量代数/空间平面直线',video:{bvid:'BV1BaJFzFERX',page:1,epTitle:'数学P1'},
                kps:[{text:'向量数量积/向量积/混合积公式',freq:'high'},
                     {text:'两平面夹角与平面点法式',freq:'high'},
                     {text:'点到直线/平面距离公式',freq:'mid'},
                     {text:'旋转面方程与常见二次曲面',freq:'mid'}],
                typicalQ:[{year:'2023',q:11,topic:'两向量垂直条件 a·b=0',formula:'a·b=axbx+ayby+azbz'}],
                easyMistakes:['向量积结果是向量不是标量','右手系方向搞错']
              },
              {idx:2,name:'行列式/矩阵运算/逆矩阵/秩',video:{bvid:'BV1BaJFzFERX',page:2},
                kps:[{text:'n阶行列式按行/列展开',freq:'high'},
                     {text:'A*伴随矩阵=|A|·A⁻¹',freq:'high'},
                     {text:'R(AB)≤min(R(A),R(B))',freq:'mid'},
                     {text:'齐次非齐次线性方程组解的判定',freq:'high'}],
                calcTip:'计算器MAT模式求3×3逆矩阵、解方程',
                typicalQ:[{year:'2022',q:14,topic:'四阶行列式值',formula:'展开法/计算器'}],
                easyMistakes:['(AB)⁻¹=B⁻¹A⁻¹ 顺序不能反']
              },
              {idx:3,name:'特征值特征向量/二次型',video:{bvid:'BV1BaJFzFERX',page:3},
                kps:[{text:'|λE-A|=0求特征值',freq:'high'},{text:'特征值之和=trA，积=|A|',freq:'high'},
                     {text:'对称阵正交化可对角化',freq:'mid'},{text:'正定二次型判定',freq:'mid'}],
                calcTip:'EQN模式解|λE-A|=0特征多项式方程',
                typicalQ:[{year:'2021',q:17,topic:'3阶矩阵特征值',formula:'Σλ=trA'}]
              }
            ]
          },
          {idx:2,name:'微积分', lectures:'公共基础BV P4~P6', pages:[4,6], weight:'★★★★★',
            sections:[
              {idx:1,name:'极限/连续/导数',video:{bvid:'BV1BaJFzFERX',page:4},
                kps:[{text:'7种未定式洛必达法则',freq:'high'},
                     {text:'等价无穷小替换 sinx~x,1-cosx~x²/2,ln(1+x)~x',freq:'high'},
                     {text:'导数几何意义与切线方程',freq:'mid'},
                     {text:'复合函数求导链式法则',freq:'high'}],
                typicalQ:[{year:'2023',q:21,topic:'0/0型洛必达',formula:'lim f/g=lim f\'/g\''}],
                easyMistakes:['等价无穷小只能用于乘因子不能用在加减']
              },
              {idx:2,name:'中值定理/偏导数/全微分/多元极值',video:{bvid:'BV1BaJFzFERX',page:5},
                kps:[{text:'拉格朗日中值定理条件',freq:'mid'},{text:'一阶二阶偏导数链式',freq:'high'},
                     {text:'无条件极值 AC-B²判别',freq:'high'},{text:'条件极值拉格朗日乘数法',freq:'mid'}],
                typicalQ:[{year:'2022',q:23,topic:'二元函数极值点',formula:'A=f_xx,B=f_xy,C=f_yy,AC-B²>0'}]
              },
              {idx:3,name:'定积分/广义积分/二重积分',video:{bvid:'BV1BaJFzFERX',page:6},
                kps:[{text:'变上限积分求导',freq:'high'},{text:'分部积分 ∫udv=uv-∫vdu',freq:'high'},
                     {text:'极坐标二重积分 rdrdθ',freq:'high'},{text:'无穷积分/瑕积分敛散',freq:'mid'}],
                calcTip:'计算器∫积分模式直接求定积分数值，5秒出结果',
                typicalQ:[{year:'2021',q:28,topic:'极坐标下二重积分',formula:'x=rcosθ,y=rsinθ'}]
              }
            ]
          },
          {idx:3,name:'无穷级数/微分方程/概率统计', lectures:'公共基础BV P7~P8', pages:[7,8], weight:'★★★★',
            sections:[
              {idx:1,name:'常数项级数敛散',video:{bvid:'BV1BaJFzFERX',page:7},
                kps:[{text:'比值审敛 ρ<1收敛',freq:'high'},{text:'P级数 1/n^P, P>1收敛',freq:'high'},
                     {text:'莱布尼茨交错级数判定',freq:'mid'},{text:'幂级数收敛半径R=1/ρ',freq:'high'}],
                typicalQ:[{year:'2022',q:31,topic:'幂级数收敛域',formula:'R=lim|an/an+1|'}]
              },
              {idx:2,name:'常微分方程',video:{bvid:'BV1BaJFzFERX',page:7,epTitle:'级数+微分方程'},
                kps:[{text:'一阶可分离变量 dy/dx=f(x)g(y)',freq:'high'},
                     {text:'一阶线性 y\'+P(x)y=Q 积分因子法',freq:'high'},
                     {text:'二阶常系数齐次通解3种情形',freq:'high'},
                     {text:'非齐次特解设形式',freq:'mid'}]
              },
              {idx:3,name:'概率统计',video:{bvid:'BV1BaJFzFERX',page:8},
                kps:[{text:'P(A∪B)=P(A)+P(B)-P(AB)',freq:'high'},{text:'条件概率贝叶斯',freq:'high'},
                     {text:'二项分布/正态分布',freq:'high'},{text:'数学期望/方差常用公式',freq:'high'},
                     {text:'样本均值/方差，χ²/t/F检验',freq:'mid'}],
                calcTip:'计算器SD模式：样本均值、标准差、方差、线性回归'
              }
            ]
          }
        ]
      },
      { key:'physics', title:'物理学', qCountPD:12, qCountPT:12, color:'common', badges:['12题24分'], chapters:[
        {idx:1,name:'热学/气体动理论/热力学',lectures:'公共基础BV P9~P11',weight:'★★★★',sections:[
          {idx:1,name:'理想气体状态方程与三种速率',video:{bvid:'BV1BaJFzFERX',page:9},
            kps:[{text:'PV=nRT=(m/M)RT',freq:'high'},{text:'最概然速率/平均/方均根速率',freq:'high'},
                 {text:'内能E=i/2nRT',freq:'high'}],
            typicalQ:[{year:'2023',q:37,topic:'两种气体温度相同比内能',formula:'E=i/2nRT'}]},
          {idx:2,name:'热力学三过程',video:{bvid:'BV1BaJFzFERX',page:10},
            kps:[{text:'等容等压等温过程 W Q ΔE计算',freq:'high'},
                 {text:'绝热过程 PV^γ=常数',freq:'high'},
                 {text:'热机循环效率 η=W/Q吸',freq:'high'},{text:'卡诺循环 η=1-T2/T1',freq:'mid'}]}
        ]},
        {idx:2,name:'波动学/光学',lectures:'公共基础BV P11~P13',weight:'★★★★',sections:[
          {idx:1,name:'机械波',video:{bvid:'BV1BaJFzFERX',page:11},
            kps:[{text:'波速u=λf=λ/T',freq:'high'},{text:'波动方程 y=Acosω(t-x/u)',freq:'high'},
                 {text:'驻波半波损失',freq:'mid'}]},
          {idx:2,name:'几何光学+波动光学',video:{bvid:'BV1BaJFzFERX',page:12},
            kps:[{text:'双缝干涉 Δx=Dλ/d',freq:'high'},{text:'薄膜干涉增透/增反',freq:'high'},
                 {text:'单缝衍射中央半宽度',freq:'mid'},{text:'光栅方程 dsinθ=kλ',freq:'high'},
                 {text:'布儒斯特角+马吕斯定律',freq:'mid'}]}
        ]},
        {idx:3,name:'近代物理',lectures:'公共基础BV P14~P15',weight:'★★★',sections:[
          {idx:1,name:'光电效应/康普顿/玻尔氢原子/波粒二象性',video:{bvid:'BV1BaJFzFERX',page:14},
            kps:[{text:'hv=A+1/2mv² 爱因斯坦方程',freq:'high'},
                 {text:'德布罗意 λ=h/p',freq:'high'},{text:'能级跃迁 E_n=-13.6/n² eV',freq:'mid'}]}
        ]}
      ]},
      { key:'chem', title:'化学', qCountPD:12, qCountPT:12, color:'common', badges:['12题24分'], chapters:[
        {idx:1,name:'物质结构基础',sections:[
          {idx:1,name:'原子结构电子排布',video:{bvid:'BV1BaJFzFERX',page:16},
            kps:[{text:'四个量子数 n,l,m,ms 取值规则',freq:'high'},
                 {text:'29号Cu、24号Cr特殊电子排布',freq:'high'},
                 {text:'化学键 离子/共价/金属/配位',freq:'mid'},
                 {text:'杂化轨道 sp sp2 sp3 sp3d2',freq:'high'}]}
        ]},
        {idx:2,name:'溶液与电化学',sections:[
          {idx:1,name:'稀溶液依数性',video:{bvid:'BV1BaJFzFERX',page:17},
            kps:[{text:'蒸汽压下降 ΔP=P°x',freq:'high'},{text:'沸点升高ΔTb=Kb·m',freq:'high'},
                 {text:'凝固点降低ΔTf=Kf·m',freq:'high'},{text:'渗透压 Π=cRT',freq:'high'}]},
          {idx:2,name:'电化学',video:{bvid:'BV1BaJFzFERX',page:18},
            kps:[{text:'能斯特方程 E=E°+RT/nF ln(氧/还)',freq:'high'},
                 {text:'电极电势越高越易还原',freq:'high'},
                 {text:'电解池阳极氧化阴极还原',freq:'mid'}]}
        ]},
        {idx:3,name:'有机化学',sections:[
          {idx:1,name:'官能团+典型反应',video:{bvid:'BV1BaJFzFERX',page:19},
            kps:[{text:'醇醛酸酯/苯环取代定位',freq:'mid'},
                 {text:'加聚/缩聚反应区别',freq:'mid'}]}
        ]}
      ]},
      { key:'bio', title:'生物 + 理论力学', qCountPD:12, qCountPT:12, color:'common', badges:['生物+理论力学12题'], chapters:[
        {idx:1,name:'生物基础/细胞学/遗传/进化',sections:[
          {idx:1,name:'细胞结构与遗传',video:{bvid:'BV1BaJFzFERX',page:21},
            kps:[{text:'有丝/减数分裂染色体数目',freq:'mid'},{text:'碱基配对 A=T,C=G',freq:'mid'},
                 {text:'中心法则 DNA→RNA→蛋白',freq:'mid'}]}
        ]},
        {idx:2,name:'理论力学 静力学',sections:[
          {idx:1,name:'静力学 约束反力/桁架/摩擦',video:{bvid:'BV1BaJFzFERX',page:22},
            kps:[{text:'二力构件特点',freq:'high'},{text:'平面力系3平衡方程',freq:'high'},
                 {text:'截面法节点法求桁架内力',freq:'high'},{text:'最大静摩擦 Fmax=fN',freq:'high'}]}
        ]},
        {idx:3,name:'运动学+动力学',sections:[
          {idx:1,name:'点运动/刚体平动转动/科氏加速度',video:{bvid:'BV1BaJFzFERX',page:24},
            kps:[{text:'自然法/直角法求速度加速度',freq:'high'},
                 {text:'牵连+相对+绝对运动',freq:'high'},
                 {text:'科氏加速度 aC=2ω×vr 大小2ωvrSinθ',freq:'high'},
                 {text:'转动惯量平行轴定理',freq:'high'},{text:'动能定理与机械能守恒',freq:'high'}]}
        ]}
      ]},
      { key:'matl', title:'材料力学', qCountPD:12, qCountPT:12, color:'common', badges:['12题24分'], chapters:[
        {idx:1,name:'轴向拉压/剪切挤压',sections:[
          {idx:1,name:'正应力/切应力',video:{bvid:'BV1BaJFzFERX',page:29},
            kps:[{text:'σ=N/A 轴向拉压',freq:'high'},{text:'拉杆变形 ΔL=NL/EA',freq:'high'},
                 {text:'剪切面 单剪/双剪 τ=Q/A',freq:'high'},{text:'挤压应力 σjy=F/Ajy',freq:'high'}]}
        ]},
        {idx:2,name:'扭转',sections:[
          {idx:1,name:'圆轴扭转强度刚度',video:{bvid:'BV1BaJFzFERX',page:30},
            kps:[{text:'τ=Tρ/Ip 最大τ=T/Wt',freq:'high'},
                 {text:'Wt=πd³/16 实心圆',freq:'high'},
                 {text:'单位长度扭转角 θ=T/(GIp)',freq:'high'}]}
        ]},
        {idx:3,name:'弯曲内力/应力/变形',sections:[
          {idx:1,name:'剪力弯矩图',video:{bvid:'BV1BaJFzFERX',page:31},
            kps:[{text:'dM/dx=Q dQ/dx=-q 三微分关系',freq:'high'},
                 {text:'集中力Q图突变M图折角',freq:'high'},{text:'集中力偶M图突变',freq:'high'}]},
          {idx:2,name:'弯曲正应力',video:{bvid:'BV1BaJFzFERX',page:32},
            kps:[{text:'σ=My/Iz 最大σ=M/Wz',freq:'high'},{text:'Wz=bh²/6 矩形',freq:'high'},
                 {text:'矩形/圆形/工字形Iz公式',freq:'high'}]},
          {idx:3,name:'压杆稳定',video:{bvid:'BV1BaJFzFERX',page:34},
            kps:[{text:'欧拉公式 Pcr=π²EI/(μL)²',freq:'high'},
                 {text:'柔度λ=μL/i',freq:'high'},{text:'μ长度系数 两端铰支μ=1',freq:'high'}]}
        ]}
      ]},
      { key:'fluid', title:'流体力学', qCountPD:12, qCountPT:12, color:'common', badges:['12题24分'], chapters:[
        {idx:1,name:'流体性质/静力学/连续性/伯努利',sections:[
          {idx:1,name:'流体静力学',video:{bvid:'BV1BaJFzFERX',page:35},
            kps:[{text:'P=P0+ρgh 静压强',freq:'high'},{text:'绝对压强/相对压强/真空度',freq:'high'},
                 {text:'平面壁静水总压力 P=ρghc·A',freq:'high'}]},
          {idx:2,name:'伯努利方程',video:{bvid:'BV1BaJFzFERX',page:37},
            kps:[{text:'z+P/ρg+v²/2g=常数',freq:'high'},{text:'连续性 A1v1=A2v2',freq:'high'},
                 {text:'文丘里测流量',freq:'high'},{text:'毕托管测速',freq:'high'}]}
        ]},
        {idx:2,name:'阻力损失/孔口管嘴/有压管流/明渠/渗流',sections:[
          {idx:1,name:'沿程与局部损失',video:{bvid:'BV1BaJFzFERX',page:39},
            kps:[{text:'hf=λ·(L/d)·v²/2g 沿程达西公式',freq:'high'},
                 {text:'Re=vd/ν 层流Re≤2300',freq:'high'},{text:'局部损失 hf=ξ·v²/2g',freq:'mid'}]},
          {idx:2,name:'渗流达西定律',video:{bvid:'BV1BaJFzFERX',page:40},
            kps:[{text:'v=kJ 达西定律',freq:'high'},{text:'渗透系数k',freq:'mid'}]}
        ]}
      ]},
      { key:'thermal', title:'热工学 + 工程流体', qCountPD:10, qCountPT:10, color:'common', badges:['10题20分'], chapters:[
        {idx:1,name:'工程热力学',sections:[
          {idx:1,name:'基本状态参数/过程/循环',video:{bvid:'BV1BaJFzFERX',page:41},
            kps:[{text:'PV=nRT/基本过程',freq:'high'},{text:'朗肯循环/再热/回热',freq:'high'},
                 {text:'制冷循环逆卡诺',freq:'mid'}]}
        ]},
        {idx:2,name:'传热学',sections:[
          {idx:1,name:'导热/对流/辐射',video:{bvid:'BV1BaJFzFERX',page:43},
            kps:[{text:'平壁导热量 Q=λAΔt/δ',freq:'high'},{text:'多层平壁热阻串联',freq:'high'},
                 {text:'牛顿冷却 Q=hAΔt',freq:'high'},{text:'黑体辐射四次方 E=σT⁴',freq:'high'}]}
        ]}
      ]},
      { key:'elecPub', title:'电工电子技术 (公共基础)', qCountPD:12, qCountPT:12, color:'common', badges:['12题24分'], chapters:[
        {idx:1,name:'电路+变压器/异步电机+接触器',sections:[
          {idx:1,name:'电路与电动机基础',video:{bvid:'BV1BaJFzFERX',page:47},
            kps:[{text:'与专业基础电路重合',freq:'high'},{text:'异步电机转差率S',freq:'high'},
                 {text:'变压器变比',freq:'high'}]},
          {idx:2,name:'继电接触控制 自锁互锁',video:{bvid:'BV1BaJFzFERX',page:51},
            kps:[{text:'启停按钮/热继电器',freq:'mid'},{text:'星三角启动电路',freq:'high'}]}
        ]}
      ]},
      { key:'info', title:'信息技术 + 法律法规 + 工程经济', qCountPD:14, qCountPT:14, color:'common', badges:['14题28分'], chapters:[
        {idx:1,name:'计算机基础/网络/信息安全',sections:[
          {idx:1,name:'操作系统/网络OSI/加密',video:{bvid:'BV1BaJFzFERX',page:53},
            kps:[{text:'OSI七层/常见端口 HTTP:80',freq:'mid'},{text:'对称加密DES/AES vs非对称RSA',freq:'mid'},
                 {text:'IP地址A/B/C类',freq:'mid'},{text:'二进制与ASCII码',freq:'high'}]}
        ]},
        {idx:2,name:'法规(招投标/合同法/安全生产/环保/节能)',sections:[
          {idx:1,name:'重点法条',video:{bvid:'BV1BaJFzFERX',page:56},
            kps:[{text:'招标文件澄清15日前',freq:'mid'},{text:'投标保证金≤估算价2%',freq:'high'},
                 {text:'要约/承诺生效时间',freq:'mid'}]}
        ]},
        {idx:3,name:'工程经济(现值/终值/IRR/NPV/盈亏)',sections:[
          {idx:1,name:'资金等值与方案评价',video:{bvid:'BV1BaJFzFERX',page:57},
            kps:[{text:'F=P(1+i)^n 一次支付终值',freq:'high'},{text:'NPV≥0则可行',freq:'high'},
                 {text:'IRR=内部收益率 NPV(IRR)=0',freq:'high'},{text:'盈亏平衡点产量',freq:'high'}],
            calcTip:'计算器A/F/P/A等值系数直接算，或用方程模式解IRR'
          }
        ]}
      ]}
    ];
  }

  /* ========= 专业基础5科（细粒度，章→节→知识点+典型题+易错点） ========= */

  /* 辅助：构造章节+节 */
  function wrapChs(arr){
    arr.forEach(function(c){if(!c.sections)c.sections=[]; c.sections.forEach(function(s){
      if(!s.kps)s.kps=[]; if(!s.typicalQ)s.typicalQ=[];
      if(!s.easyMistakes)s.easyMistakes=[];if(!s.calcTip)s.calcTip=null;
    });});
    return arr;
  }

  /* 1) 电路与电磁场 9+4=13章 */
  var circuitChapters = wrapChs([
    { idx:1, name:'基本概念和基本定律', lectures:'张工电路 P1~P5', pages:[1,5], weight:'★★★',
      sections:[
        { idx:1, name:'电路模型+参考方向+功率计算', video:{bvid:'BV1yL411R7rr',page:1,epTitle:'P1 电路基本概念'},
          kps:[{text:'电压电流关联/非关联参考方向',freq:'high'},
               {text:'P=UI 关联时吸收；非关联时发出',freq:'high'},
               {text:'功率平衡：ΣP吸=0',freq:'mid'},
               {text:'理想电压源/电流源与受控源四类',freq:'mid'}],
          typicalQ:[{year:'2022',q:18,topic:'求二端网络吸收/发出功率',formula:'P=U·I 判定参考方向'}],
          easyMistakes:['方向搞错会导致功率正负号错','受控源也是源不能当一般电阻看']
        },
        { idx:2, name:'KCL/KVL 与电阻等效变换', video:{bvid:'BV1yL411R7rr',page:2,epTitle:'P2 欧姆定律与KVL'},
          kps:[{text:'KCL ΣI入=ΣI出 节点',freq:'high'},{text:'KVL ΣU=0 沿闭合回路',freq:'high'},
               {text:'Y形Δ形互变 RΔ=3RY',freq:'high'},{text:'电源等效变换',freq:'high'}],
          typicalQ:[{year:'2023',q:22,topic:'KCL求某支路电流',formula:'ΣI=0'}],
          calcTip:'节点电压法 → EQN三元一次 计算器5秒出3个节点电压'
        }
      ]},
    { idx:2, name:'电路的分析方法', lectures:'张工电路 P6~P11', pages:[6,11], weight:'★★★★★ (年年必考)',
      sections:[
        { idx:1, name:'节点电压法 / 网孔电流法', video:{bvid:'BV1yL411R7rr',page:6},
          kps:[{text:'节点电压法自导×本节点 - Σ互导×邻节点 = Σ电流源流入 + Σ(电压源串电阻)',freq:'high'},
               {text:'含无伴电压源时设超节点列补充方程',freq:'high'},
               {text:'网孔法：自阻×本网孔 - Σ互阻×邻网孔 = Σ电压源升',freq:'high'},
               {text:'网孔公共电流源：KCL约束方程',freq:'mid'}],
          typicalQ:[{year:'2023',q:26,topic:'3节点+2无伴电压源',formula:'超节点+KCL'},
                    {year:'2021',q:27,topic:'网孔法+公共电流源',formula:'互阻为负'}],
          calcTip:'节点电压法得到的线性方程组 → 计算器EQN模式直接解三元/四元',
          easyMistakes:['互导前面是负号，不是正号','无伴电压源忘了超节点补充方程']
        },
        { idx:2, name:'叠加定理 / 戴维南 / 诺顿 / 最大功率传输', video:{bvid:'BV1yL411R7rr',page:10,epTitle:'P10 戴维南定理'},
          kps:[{text:'叠加：独立源一个个作用，受控源保留',freq:'high'},
               {text:'戴维南：Uoc 开路电压；Req 除源后等效电阻',freq:'high'},
               {text:'Req求法：外加电源法/短路电流法/测开路短路 Uoc/Isc',freq:'high'},
               {text:'诺顿：Isc=Uoc/Req 并联 Req',freq:'high'},
               {text:'最大功率 R_L=Req 时 Pmax=Uoc²/(4Req)',freq:'high'}],
          typicalQ:[{year:'2022',q:28,topic:'戴维南+最大功率',formula:'Pmax=Uoc²/(4Req)'}],
          easyMistakes:['叠加时受控源不能置零','求Req时独立源要置零(电压源短路电流源开路)']
        }
      ]},
    { idx:3, name:'正弦交流电路', lectures:'张工电路 P12~P20', pages:[12,20], weight:'★★★★★',
      sections:[
        { idx:1, name:'相量法 + RLC阻抗', video:{bvid:'BV1yL411R7rr',page:12},
          kps:[{text:'U_m ∠φ = U_m (cosφ+jsinφ)',freq:'high'},
               {text:'Z_R=R Z_L=jωL Z_C=1/(jωC)=-j/ωC',freq:'high'},
               {text:'串联总阻抗 Z=R+j(X_L-X_C)',freq:'high'},
               {text:'导纳 Y=1/Z=G+jB',freq:'mid'}],
          calcTip:'计算器 CMPLX模式：相量加减乘除、↔直角/极坐标 转换一步到位'
        },
        { idx:2, name:'正弦稳态功率/功率因数/三相电路', video:{bvid:'BV1yL411R7rr',page:17},
          kps:[{text:'有功 P=UIcosφ 单位W',freq:'high'},{text:'无功 Q=UIsinφ 单位Var',freq:'high'},
               {text:'视在 S=UI 单位VA；P²+Q²=S²',freq:'high'},
               {text:'功率因数提高并联电容 C=P/(ωU²)(tanφ1-tanφ2)',freq:'high'},
               {text:'对称Y接：U_L=√3·U_P I_L=I_P',freq:'high'},
               {text:'对称Δ接：U_L=U_P I_L=√3·I_P',freq:'high'},
               {text:'三相功率 P=√3·U_L·I_L·cosφ',freq:'high'}],
          typicalQ:[{year:'2023',q:32,topic:'提高功率因数并联电容大小',formula:'C=P/(ωU²)(tanφ1-tanφ2)'},
                    {year:'2022',q:33,topic:'Y接对称三相功率',formula:'P=√3 U_L I_L cosφ'}],
          easyMistakes:['√3 在哪种接法乘一定搞反：Y接U_L乘√3，Δ接I_L乘√3','功率因数角是电压减电流相角']
        }
      ]},
    { idx:4, name:'非正弦周期电路', lectures:'张工电路 P21~P23', pages:[21,23], weight:'★★★',
      sections:[
        { idx:1, name:'傅里叶分解 + 有效值/平均值/功率叠加', video:{bvid:'BV1yL411R7rr',page:21},
          kps:[{text:'有效值 I=√(I_0²+I_1²+I_2²+...)',freq:'high'},
               {text:'平均功率 P=P0+P1+P2+...（各次谐波代数和，不同次不产生互功率）',freq:'high'},
               {text:'每次谐波单独作用计算，X_L=kωL X_C=1/(kωC)',freq:'high'}],
          typicalQ:[{year:'2021',q:36,topic:'含2次3次谐波的有效值与功率',formula:'I=√(I0²+I1²+I2²)'}],
          easyMistakes:['不同次谐波之间不能相量相加，瞬时值可相加']
        }
      ]},
    { idx:5, name:'动态电路暂态分析', lectures:'张工电路 P24~P30', pages:[24,30], weight:'★★★★',
      sections:[
        { idx:1, name:'换路定则 + 一阶三要素', video:{bvid:'BV1yL411R7rr',page:24},
          kps:[{text:'u_C(0+)=u_C(0-)  i_L(0+)=i_L(0-)',freq:'high'},
               {text:'三要素 f(t)=f(∞)+[f(0+)-f(∞)]e^(-t/τ)',freq:'high'},
               {text:'τ_RC=RC  τ_RL=L/R',freq:'high'},
               {text:'0+等效：电容→电压源，电感→电流源',freq:'high'}],
          typicalQ:[{year:'2023',q:37,topic:'RC暂态求uC(t)',formula:'三要素公式'}],
          calcTip:'ln、e^x 在计算器上可直接算衰减曲线任意时刻值'
        },
        { idx:2, name:'二阶电路 + 状态方程', video:{bvid:'BV1yL411R7rr',page:30},
          kps:[{text:'过阻尼 R>2√(L/C) 特征根两不同实根',freq:'mid'},
               {text:'欠阻尼 R<2√(L/C) 衰减振荡 α阻尼 ωd有阻尼频率',freq:'mid'},
               {text:'状态方程：选uC与iL为状态变量列标准型 dx/dt=Ax+Bv',freq:'high'}]
        }
      ]},
    { idx:6, name:'静电场', lectures:'张工电路 P31~P35 + 电磁场辅助BV', pages:[31,35], weight:'★★★',
      sections:[
        { idx:1, name:'库仑定律/高斯定理/电位', video:{bvid:'BV1yL411R7rr',page:32},
          kps:[{text:'E=F/q=kQ/r² · e_r',freq:'mid'},{text:'高斯 ∮D·dS=Σq内，D=εE',freq:'high'},
               {text:'电位 φ=∫E·dl 从场点到参考点',freq:'mid'}]
        },
        { idx:2, name:'镜像法/分离变量/电介质分界面', video:{bvid:'BV1S24y1x7Rd',page:1},
          kps:[{text:'平面导体镜像 等量异号',freq:'high'},
               {text:'球面镜像 q′=-Rq/d 距离R²/d',freq:'high'},
               {text:'电轴法 长直输电线电容',freq:'mid'},
               {text:'介质分界面：E1t=E2t  D1n-D2n=σ',freq:'mid'}]
        }
      ]},
    { idx:7, name:'恒定电场', lectures:'张工电路 P36~P38', pages:[36,38], weight:'★★',
      sections:[
        { idx:1, name:'J=σE / 接地电阻 / 静电比拟', video:{bvid:'BV1yL411R7rr',page:37},
          kps:[{text:'J=σE 欧姆定律微分',freq:'high'},
               {text:'半球形接地 R=1/(2πσr)',freq:'high'},
               {text:'跨步电压',freq:'mid'},{text:'静电比拟法 E场与J场同形',freq:'mid'}]
        }
      ]},
    { idx:8, name:'恒定磁场', lectures:'张工电路 P39~P43', pages:[39,43], weight:'★★★',
      sections:[
        { idx:1, name:'毕奥萨伐尔 / 安培环路 / 自感互感', video:{bvid:'BV1yL411R7rr',page:40},
          kps:[{text:'∮H·dl=ΣI 安培环路',freq:'high'},{text:'Φ=LI Ψ=MI 互感同名端',freq:'high'},
               {text:'磁场能量 Wm=1/2LI²+1/2ΣMIiIj',freq:'mid'}]
        }
      ]},
    { idx:9, name:'均匀传输线 + 复习', lectures:'张工电路 P44~P45', pages:[44,45], weight:'★★',
      sections:[
        { idx:1, name:'特性阻抗/波速/反射系数/驻波', video:{bvid:'BV1S24y1x7Rd',page:16},
          kps:[{text:'Z0=√(L0/C0) 特性阻抗',freq:'high'},{text:'无畸变条件 R0/L0=G0/C0',freq:'mid'},
               {text:'反射系数 Γ=(ZL-Z0)/(ZL+Z0) 终端短路|Γ|=1全反射',freq:'high'}]
        }
      ]},
    { idx:10, name:'麦克斯韦方程 + 时变电磁场', lectures:'张工电磁场辅助 P10~P14', pages:[10,14], weight:'★★★★',
      sections:[
        { idx:1, name:'位移电流/麦克斯韦全四式/坡印廷矢量', video:{bvid:'BV1S24y1x7Rd',page:12},
          kps:[{text:'∮H·dl=I+Id Id=dΦ_D/dt 位移电流',freq:'high'},
               {text:'全电流连续 I+Id=恒连续',freq:'high'},
               {text:'∮E·dl=-dΦ/dt 法拉第定律',freq:'high'},
               {text:'∮B·dS=0 磁通连续',freq:'mid'},
               {text:'∮D·dS=q 高斯电',freq:'mid'},
               {text:'S=E×H 坡印廷 功率流',freq:'high'}],
          typicalQ:[{year:'2022',q:42,topic:'位移电流大小',formula:'Id=ε·dΦ_E/dt'}],
          easyMistakes:['位移电流不产生焦耳热，只产生磁场，和传导电流不是一回事']
        }
      ]},
    { idx:11, name:'平面电磁波', lectures:'张工电磁场辅助 P15~P16', pages:[15,16], weight:'★★',
      sections:[
        { idx:1, name:'波速/波阻抗/良导体趋肤效应', video:{bvid:'BV1S24y1x7Rd',page:15},
          kps:[{text:'η0=√(μ0/ε0)=377Ω 真空波阻抗',freq:'high'},
               {text:'v=c/n=1/√(με)',freq:'mid'},
               {text:'趋肤深度 δ=√(2/ωμσ) 越高频越浅',freq:'high'}]
        }
      ]}
  ]);

  /* 2) 模拟电子 11章 */
  var analogChapters = wrapChs([
    { idx:1, name:'半导体二极管', sections:[
      { idx:1, name:'PN结/伏安特性/稳压管', video:{bvid:'BV1nT411B7j5',page:1},
        kps:[{text:'正向导通 0.7V硅/0.2V锗 死区电压',freq:'high'},
             {text:'理想模型/恒压降/折线模型三种',freq:'high'},
             {text:'稳压管反向击穿区稳压，需串限流电阻',freq:'high'},
             {text:'二极管整流/限幅/钳位',freq:'mid'}],
        typicalQ:[{year:'2022',q:44,topic:'二极管电路求输出电压',formula:'先判导通/截止'}],
        easyMistakes:['两个二极管并联谁先导通：阳极电压最高/阴极电压最低']
      }
    ]},
    { idx:2, name:'三极管BJT', sections:[
      { idx:1, name:'伏安特性/三种工作区/微变等效', video:{bvid:'BV1nT411B7j5',page:4},
        kps:[{text:'放大条件 发射结正偏 集电结反偏',freq:'high'},
             {text:'Ic=βIb Ie=(1+β)Ib α=β/(1+β)',freq:'high'},
             {text:'三个区：放大/饱和(都正偏)/截止(都反偏)',freq:'high'},
             {text:'r_be=300+(1+β)·26mV/Ieq 输入电阻',freq:'high'}],
        typicalQ:[{year:'2023',q:47,topic:'静态工作点+微变rbe',formula:'rbe=300+(1+β)26/Ie(mA)'}]
      }
    ]},
    { idx:3, name:'场效应管FET', sections:[
      { idx:1, name:'JFET/MOS管 共源共漏组态', video:{bvid:'BV1nT411B7j5',page:9},
        kps:[{text:'增强型/耗尽型N沟道/ P沟道 VGS(th) vs VGS(off)',freq:'high'},
             {text:'gm=跨导 Id=gmVgs 微变等效',freq:'high'},
             {text:'共源(反相大Av高输入电阻)/共漏(同相Av≈1电压跟随)',freq:'high'}]
      }
    ]},
    { idx:4, name:'放大电路基础', sections:[
      { idx:1, name:'共射/共集/共基 三种组态', video:{bvid:'BV1nT411B7j5',page:14},
        kps:[{text:'共射：Au=-βRc/rbe 反相放大',freq:'high'},
             {text:'共集：Au≈1 射极输出器 高Ri低Ro',freq:'high'},
             {text:'共基：同相 高频特性好',freq:'mid'},
             {text:'多级放大 Au=Au1·Au2·Au3 级联Ri串联',freq:'high'},
             {text:'差分放大 双端输入单端输入 Ad Kcmr',freq:'high'}],
        typicalQ:[{year:'2021',q:51,topic:'共射分压偏置放大倍数',formula:'Au=-βR_L\'/rbe'}]
      }
    ]},
    { idx:5, name:'频率响应', sections:[
      { idx:1, name:'RC耦合波特图/上限截止/增益带宽积', video:{bvid:'BV1nT411B7j5',page:18},
        kps:[{text:'fL 耦合电容、旁路电容影响 低频',freq:'mid'},
             {text:'fH 晶体管极间电容 高频',freq:'mid'},
             {text:'波特图 每十倍程 ±20dB/dec',freq:'high'},
             {text:'增益带宽积GBW=|Au|·fH≈常数',freq:'high'}]
      }
    ]},
    { idx:6, name:'负反馈', sections:[
      { idx:1, name:'四种组态判定 + 深度负反馈计算', video:{bvid:'BV1nT411B7j5',page:20},
        kps:[{text:'电压/电流 × 串联/并联 四组态',freq:'high'},
             {text:'判别电压：输出短路 Vf是否=0 → 是则电压反馈',freq:'high'},
             {text:'判别串联：输入开路 Xi是否加不上 → 是则串联反馈',freq:'high'},
             {text:'负反馈：瞬时极性法回送使净入减小',freq:'high'},
             {text:'深度负反馈 Af=1/F Xi≈Xf',freq:'high'}],
        typicalQ:[{year:'2023',q:54,topic:'判定运放反馈组态+Au',formula:'深度负反馈虚短虚断 Xi=Xf'}],
        easyMistakes:['瞬时极性判错会导致"正反馈判成负反馈"']
      }
    ]},
    { idx:7, name:'集成运放基础', sections:[
      { idx:1, name:'运放两虚 虚短(Up=Un) 虚断(无电流)', video:{bvid:'BV1nT411B7j5',page:25},
        kps:[{text:'开环Aod→∞ Rid→∞ Ro→0',freq:'high'},{text:'虚短虚断是分析运放线性应用的两把刀',freq:'high'}]
      }
    ]},
    { idx:8, name:'信号运算与处理', sections:[
      { idx:1, name:'反相/同相/加/减/微分/积分 + 有源滤波', video:{bvid:'BV1nT411B7j5',page:26},
        kps:[{text:'反相比例 Au=-Rf/Rin',freq:'high'},{text:'同相比例 Au=1+Rf/Rin 电压跟随器是特例',freq:'high'},
             {text:'加法器 -Rf(Vi1/R1+Vi2/R2)',freq:'high'},{text:'差分 (V2-V1)·Rf/R1',freq:'high'},
             {text:'积分 Vo=-1/(RC)∫Vi dt',freq:'high'},{text:'微分 Vo=-RC dVi/dt',freq:'mid'},
             {text:'一阶低通 LPF / 高通 HPF / 带通 BPF / 带阻 BE',freq:'high'}],
        typicalQ:[{year:'2022',q:57,topic:'运放+电容构成微分/积分',formula:'积分 Vo=-∫Vi/(RC) dt'}],
        easyMistakes:['微分和积分别搞反：Vi经过C到R是微分，经过R到C到地是积分']
      }
    ]},
    { idx:9, name:'信号发生', sections:[
      { idx:1, name:'正弦波振荡 起振相位2nπ 幅值>1', video:{bvid:'BV1nT411B7j5',page:28},
        kps:[{text:'RC文氏桥 f0=1/(2πRC)',freq:'high'},
             {text:'LC三点式 共射三点 判据：Xbe与Xbc同性质 Xce反性质',freq:'high'},
             {text:'方波 迟滞比较+RC充放电',freq:'mid'}]
      }
    ]},
    { idx:10, name:'功率放大', sections:[
      { idx:1, name:'OCL/OTL 最大输出功率/效率', video:{bvid:'BV1nT411B7j5',page:29},
        kps:[{text:'乙类互补最大Pom=Vcc²/(2RL) η=π/4≈78.5%',freq:'high'},
             {text:'交越失真解决：甲乙类加偏置',freq:'high'}]
      }
    ]},
    { idx:11, name:'直流电源', sections:[
      { idx:1, name:'桥式整流 + 电容滤波 + 三端稳压器', video:{bvid:'BV1nT411B7j5',page:30},
        kps:[{text:'全波整流 Uo=0.9U2(无滤波)',freq:'high'},
             {text:'大电容滤波 空载≈√2U2 满载≈1.2U2',freq:'high'},
             {text:'纹波系数、稳压系数、7805/79xx系列',freq:'mid'}]
      }
    ]}
  ]);

  /* 3) 数字电子 8章 */
  var digitalChapters = wrapChs([
    { idx:1, name:'数制与码制 + 逻辑代数', sections:[
      { idx:1, name:'进制转换/BCD码/逻辑化简', video:{bvid:'BV1Tk4y1q7L8',page:1},
        kps:[{text:'2/8/10/16进制相互转换：整除以2取余逆序',freq:'high'},
             {text:'8421/2421/余3码 权重和特点',freq:'high'},
             {text:'基本公式：A+A=A A·A=A A+A\'=1',freq:'high'},
             {text:'摩根定律 (A+B)\'=A\'·B\'  (AB)\'=A\'+B\'',freq:'high'},
             {text:'卡诺图化简 4变量16格画圈圈1最大2^n',freq:'high'}],
        typicalQ:[{year:'2023',q:61,topic:'4变量卡诺图最简与或',formula:'卡诺图 画圈圈1，相邻2/4/8格可合并'}],
        easyMistakes:['卡诺图忘了冗余圈']
      }
    ]},
    { idx:2, name:'逻辑门电路', sections:[
      { idx:1, name:'TTL与CMOS门特性', video:{bvid:'BV1Tk4y1q7L8',page:2},
        kps:[{text:'TTL输入悬空=高电平；CMOS输入悬空危险不允许',freq:'high'},
             {text:'与非门不用端接高电平(VCC/串电阻)；或非门不用端接地',freq:'high'},
             {text:'OC门必须上拉电阻才能线与；三态门TSL允许共用总线',freq:'high'}]
      }
    ]},
    { idx:3, name:'组合逻辑电路', sections:[
      { idx:1, name:'编码器/译码器/数据选择器/加法器/比较器', video:{bvid:'BV1Tk4y1q7L8',page:2,epTitle:'P2 组合逻辑'},
        kps:[{text:'74LS138 3-8译码器 + 与非门实现任意3变量逻辑',freq:'high'},
             {text:'74LS151 8选1 MUX 地址ABC选D0-D7实现逻辑',freq:'high'},
             {text:'4位二进制加法器 74LS283 超前进位',freq:'high'},
             {text:'半加/全加 CO=AB+(A+B)Ci',freq:'high'},
             {text:'竞争冒险：两级门延时，消除加滤波电容/选通脉冲/增加冗余项',freq:'high'}],
        typicalQ:[{year:'2022',q:64,topic:'3-8译码器画电路实现指定逻辑',formula:'先列真值表，写出最小项Σm'}]
      }
    ]},
    { idx:4, name:'触发器', sections:[
      { idx:1, name:'RS/JK/D/T 特性方程 + 异步置零置一', video:{bvid:'BV1Tk4y1q7L8',page:3},
        kps:[{text:'RS：Q*=S+R\'Q SR=0 约束',freq:'high'},
             {text:'JK：Q*=JQ\'+K\'Q (无约束 最通用)',freq:'high'},
             {text:'D：Q*=D',freq:'high'},{text:'T：Q*=T⊕Q；T\'翻转 Q*=Q\'',freq:'high'},
             {text:'异步 SD/RD 直接复位 与CP无关',freq:'high'}],
        typicalQ:[{year:'2023',q:67,topic:'D触发器+异或门画波形',formula:'Q(n+1)=D'}]
      }
    ]},
    { idx:5, name:'时序逻辑电路分析与设计', sections:[
      { idx:1, name:'同步时序 三方程 驱动/状态/输出 + 计数器', video:{bvid:'BV1Tk4y1q7L8',page:3},
        kps:[{text:'同步分析：列方程→状态表→状态图→功能',freq:'high'},
             {text:'N进制计数器：集成芯片74161/74160 异步清零/同步置数法构成任意模M',freq:'high'},
             {text:'级联：异步级(高位片用低位进位/溢出)同步级(多片共用CP)',freq:'high'},
             {text:'移位寄存器：环形计数器模N，扭环形模2N',freq:'high'}],
        typicalQ:[{year:'2022',q:69,topic:'74161 同步置数法构成模12',formula:'初值=16-12=4；或终值=15-(M-初值)'}]
      }
    ]},
    { idx:6, name:'脉冲波形产生与整形', sections:[
      { idx:1, name:'555定时器 三种工作模式', video:{bvid:'BV1Tk4y1q7L8',page:4},
        kps:[{text:'多谐振荡器(自激方波 无稳态) T≈0.7(R1+2R2)C',freq:'high'},
             {text:'单稳态触发器 Tw≈1.1RC 定时应用',freq:'high'},
             {text:'施密特触发器 回差ΔUT=1/3VCC 整形应用',freq:'high'}],
        typicalQ:[{year:'2021',q:72,topic:'555外接参数计算周期',formula:'T1=0.7(R1+R2)C T2=0.7 R2 C'}]
      }
    ]},
    { idx:7, name:'存储器与可编程逻辑', sections:[
      { idx:1, name:'ROM/RAM容量扩展', video:{bvid:'BV1Tk4y1q7L8',page:4},
        kps:[{text:'容量=字数×位数：2^10×8=1K×8bit=1KB',freq:'high'},
             {text:'位扩展：并联数据端 地址/控制并联',freq:'high'},
             {text:'字扩展：用译码器输出选片，地址高位接译码输入',freq:'high'}]
      }
    ]},
    { idx:8, name:'DAC与ADC', sections:[
      { idx:1, name:'权电阻/倒T形 DAC + 逐次逼近/双积分 ADC', video:{bvid:'BV1Tk4y1q7L8',page:5},
        kps:[{text:'n位倒T DAC Vout=-(Vref/Rf)·(R/2^n)·D= -Vref·D/2^n',freq:'high'},
             {text:'DAC分辨率=VFS/2^n = 1 LSB对应电压',freq:'high'},
             {text:'ADC分辨率=FSR/2^n 量化误差±1/2 LSB',freq:'high'},
             {text:'逐次逼近型：速度中等 精度高 应用最广',freq:'high'},
             {text:'双积分型：抗干扰强速度慢 数字电压表',freq:'high'}],
        typicalQ:[{year:'2023',q:74,topic:'8位DAC输入01H输出多少',formula:'Vout=-Vref·D/2^8'}]
      }
    ]}
  ]);

  /* 4) 电机学 8章 */
  var machinesChapters = wrapChs([
    { idx:1, name:'磁路与变压器基础', sections:[
      { idx:1, name:'磁路欧姆定律 铁磁材料 铁损', video:{bvid:'BV1gN411w7ZW',page:1},
        kps:[{text:'Φ=IN/Rm Rm=L/(μS) 磁路欧姆',freq:'high'},
             {text:'铁损=磁滞+涡流；硅钢片叠片降涡流',freq:'high'},
             {text:'B-H曲线：起始段/直线段/饱和段 μ随H减小',freq:'mid'}]
      },
      { idx:2, name:'变压器空载与负载 简化等效电路', video:{bvid:'BV1gN411w7ZW',page:5},
        kps:[{text:'空载 I0≈励磁电流；空载损耗≈铁损',freq:'high'},
             {text:'E1=4.44fN1Φm 感应电势公式',freq:'high'},
             {text:'电压变化率 ΔU%=β(R_k*cosφ±X_k*sinφ)',freq:'high'},
             {text:'效率 η=(P2/(P2+pFe+pCu))×100% 最大效率当可变损耗=不变损耗',freq:'high'}],
        typicalQ:[{year:'2023',q:82,topic:'变压器效率最大点负载系数',formula:'pCu=β²·PkN=pFe 解得β=√(pFe/PkN)'}],
        calcTip:'开根号用计算器√键直接算，或方程模式解二次函数'
      }
    ]},
    { idx:2, name:'三相变压器', sections:[
      { idx:1, name:'联结组别 Yyn0 Dyn11 Yd11 / 并联运行', video:{bvid:'BV1gN411w7ZW',page:6},
        kps:[{text:'组别判定：同名端/极性标好画相量，时针法分针位置',freq:'high'},
             {text:'并联运行三条件：变比相同±0.5%/组别相同/阻抗电压相等±10%',freq:'high'},
             {text:'三相变压器组(三相独立铁芯)不能接Yyn0，三次谐波磁通大',freq:'high'}],
        easyMistakes:['Dyn11的"11"指高压分针指12时低压分针指11=330°']
      }
    ]},
    { idx:3, name:'同步发电机基本原理与特性', sections:[
      { idx:1, name:'电枢反应 + 电压方程相量图 + V型曲线', video:{bvid:'BV1gN411w7ZW',page:13},
        kps:[{text:'E0=4.44fNkw Φf 空载电势',freq:'high'},
             {text:'电枢反应三情况：I滞后→去磁 φ减小；I超前→助磁 φ增大；I同相→交磁',freq:'high'},
             {text:'隐极 E=U+I·jXs 凸极 E_Q=U+I(Ra+jXq) 用虚拟电势',freq:'high'},
             {text:'V型曲线 (If-P) 过励磁输出感性无功；欠励磁输出容性无功',freq:'high'},
             {text:'功角特性 P=m·E0·U/Xd·sinδ 电磁功率',freq:'high'}],
        typicalQ:[{year:'2022',q:85,topic:'同步机U、I、cosφ求功角δ',formula:'相量图 tanφ=XqIcosφ/(U+XqIsinφ)'}]
      }
    ]},
    { idx:4, name:'同步发电机并联运行与故障', sections:[
      { idx:1, name:'准同期三条件 + 突然短路 + 不对称分量', video:{bvid:'BV1gN411w7ZW',page:19},
        kps:[{text:'准同期：U等/频等/相序同/相位差小',freq:'high'},
             {text:'X_d>X_q>X\'_d>X\'\'_d 次暂态最小 冲击电流最大',freq:'high'},
             {text:'对称分量法 I0,I1,I2 = 1/3·[F(a)·I_a+F(a²)·I_b+I_c]',freq:'high'}]
      }
    ]},
    { idx:5, name:'异步电机结构与原理', sections:[
      { idx:1, name:'旋转磁场 + 转差率 + 等效电路', video:{bvid:'BV1gN411w7ZW',page:25},
        kps:[{text:'n1=60f/p 同步转速',freq:'high'},{text:'s=(n1-n)/n1 转差率 正常运行s≈0.02~0.06',freq:'high'},
             {text:'T型等效：R2\'/s = R2\'+R2\'(1-s)/s 后者代表机械功率',freq:'high'},
             {text:'功率平衡：P1-pcu1-pfe-pcu2-pmec-pad=P2',freq:'high'}]
      }
    ]},
    { idx:6, name:'异步电机转矩特性、启动调速制动', sections:[
      { idx:1, name:'最大转矩、启动转矩、星三角、变频', video:{bvid:'BV1gN411w7ZW',page:28},
        kps:[{text:'Tm=m·U²/(2ω1·(R1+√(R1²+(X1+X2\')²))) ∝U² 与R2无关',freq:'high'},
             {text:'sm=R2\'/√(R1²+(X1+X2\')²) 临界转差 与R2成正比',freq:'high'},
             {text:'直接启动 Ist=(5~7)IN Tst=(1~2)TN',freq:'high'},
             {text:'星三角启动：I线降为直接启动的1/3；T也降为1/3',freq:'high'},
             {text:'降压：定子串阻/自耦变压器；绕线：转子串阻/频敏变阻器',freq:'high'},
             {text:'调速：变频(最理想)/变极/转子串电阻(绕线式)/串级调速',freq:'high'},
             {text:'制动：能耗(直流入定子)/反接/回馈(下坡/下放时n>n1)',freq:'high'}],
        typicalQ:[{year:'2023',q:88,topic:'星三角启动电流和启动转矩倍数',formula:'I星/三=1/3 ; T星/三=1/3'}],
        easyMistakes:['星三角启动只能用于正常运行时Δ接的三相笼型电机！']
      }
    ]},
    { idx:7, name:'直流电机', sections:[
      { idx:1, name:'电势/转矩公式 + 他励调速', video:{bvid:'BV1gN411w7ZW',page:31},
        kps:[{text:'Ea=CeΦn 电枢电势',freq:'high'},{text:'T=CtΦIa 电磁转矩',freq:'high'},
             {text:'他励转速 n=(U-IaRa)/(CeΦ)',freq:'high'},
             {text:'调速三法：电枢串阻(向下)/弱磁(向上)、降压(向下最平滑)',freq:'high'}]
      }
    ]},
    { idx:8, name:'电动机选择', sections:[
      { idx:1, name:'功率选法 + 工作制S1~S10 + 绝缘等级', video:{bvid:'BV1gN411w7ZW',page:34},
        kps:[{text:'连续S1按PN选择；短时S2按等效发热选择过载系数校验',freq:'high'},
             {text:'绝缘F级最高允许温度155°C H级180°C',freq:'mid'},
             {text:'鼠笼式优先，启动频繁/大转矩选绕线式',freq:'mid'}]
      }
    ]}
  ]);

  /* 5) 电气工程基础 9章 */
  var powerChapters = wrapChs([
    { idx:1, name:'电力系统基本概念 + 主接线', sections:[
      { idx:1, name:'额定电压等级/发电机/变压器/负荷额定值/中性点', video:{bvid:'BV1GL411y7Sb',page:1},
        kps:[{text:'发电机UN=1.05×系统UN；变压器一次侧=线路UN(直接接发电机=1.05UN)；二次侧=1.05/1.1UN',freq:'high'},
             {text:'我国标准电压等级：0.38/10/35/110/220/330/500/750/1000 kV',freq:'high'},
             {text:'中性点接地：110kV+有效接地；3-66kV不接地/消弧线圈接地；380V直接接地',freq:'high'},
             {text:'消弧线圈补偿原则：过补偿为主',freq:'high'}]
      },
      { idx:2, name:'主接线形式：单母线/双母线/桥形/角形/3/2/单元/外桥内桥', video:{bvid:'BV1GL411y7Sb',page:2},
        kps:[{text:'内桥：桥断路器在变压器侧→线路操作方便，适合长线路/变压器不常切换',freq:'high'},
             {text:'外桥：桥断路器在线路侧→适合短线路/变压器常切换/穿越功率',freq:'high'},
             {text:'一个半断路器接线：500kV+超高压可靠性最高任一断路器检修不停电',freq:'high'},
             {text:'可靠性指标：停电次数/时间/不足供电量 SAIDI SAIFI',freq:'mid'}]
      }
    ]},
    { idx:2, name:'元件参数与等值电路', sections:[
      { idx:1, name:'线路π型 / 变压器 / 发电机 / 标幺值', video:{bvid:'BV1GL411y7Sb',page:5},
        kps:[{text:'R=r0·L X=x0·L B/2=b0/2·L 单回线路π',freq:'high'},
             {text:'变压器等值RT=ΔPk·U²/SN XT=Uk%·U²/(100·SN) GT=ΔP0/U² BT=I0%·SN/(100·U²)',freq:'high'},
             {text:'标幺值 SB、UB选好 电流标幺 I*=S*/(√3U*)；阻抗Z*=Z·SB/UB²',freq:'high'},
             {text:'多电压级选UB按平均电压 Uav≈1.05UN (如230/115/37/10.5/0.4 kV)',freq:'high'}],
        typicalQ:[{year:'2022',q:94,topic:'变压器参数归算到高压侧',formula:'RT=ΔPk U²/SN² 单位Ω'}],
        calcTip:'百分号转小数一定小数点！很多人Uk%=12.5代入时忘了除以100'
      }
    ]},
    { idx:3, name:'潮流计算', sections:[
      { idx:1, name:'开式网/闭式网/功率分点', video:{bvid:'BV1GL411y7Sb',page:9},
        kps:[{text:'开式网末端已知：先算功率损耗得首端功率；再算电压降落得首端电压',freq:'high'},
             {text:'ΔS=(P²+Q²)/U²·(R+jX) 阻抗功率损耗',freq:'high'},
             {text:'电压降落纵分量 dU=(PR+QX)/U 横分量 δU=(PX-QR)/U',freq:'high'},
             {text:'闭式网初步潮流(忽略损耗，按阻抗共轭)：自然分布',freq:'high'},
             {text:'强制分布=初步+循环功率；功率分点：两边流入点拆开，按两个开式计算',freq:'high'}],
        typicalQ:[{year:'2023',q:97,topic:'110kV线路末端负荷求首端功率与电压',formula:'ΔS=(P²+Q²)(R+jX)/U²'}],
        easyMistakes:['功率损耗分母是U²，不是UN²。已知哪端就用哪端的U值']
      }
    ]},
    { idx:4, name:'电压调整与频率调整', sections:[
      { idx:1, name:'四手段：分接头/无功补偿/调相机/有载调压', video:{bvid:'BV1GL411y7Sb',page:16},
        kps:[{text:'变压器分接头选择：U_t = U_1max/U_2max·U_2N 取最接近标准分接',freq:'high'},
             {text:'电容器容性无功容量 Qc = U_2c · (U_2c-U_2)/X · U_2N²/U_2N²',freq:'high'},
             {text:'频率一次调整：调速器 有差 ΔP=-K_G·Δf',freq:'high'},
             {text:'二次调整：调频器 无差 主调频厂承担计划外负荷',freq:'high'}]
      }
    ]},
    { idx:5, name:'短路电流计算', sections:[
      { idx:1, name:'无限大容量 周期非周期/冲击系数/标幺制/运算曲线/不对称短路', video:{bvid:'BV1GL411y7Sb',page:20},
        kps:[{text:'I\"=E\"/XΣ 次暂态电流',freq:'high'},
             {text:'ich=√2 · Kch · I\"  Kch冲击系数：1.8(机端)~1.9(远区故障) 高压1.85',freq:'high'},
             {text:'Ish=Kch·I\" 冲击电流有效值',freq:'high'},
             {text:'短路容量 S\"=√3·UN·I\"=S_B/XΣ* 标幺简单=1/XΣ* ×SB',freq:'high'},
             {text:'对称分量 I_a1=(I_a+aI_b+a²I_c)/3  a=∠120°',freq:'high'},
             {text:'单相接地 I_f=3E/(X1Σ+X2Σ+X0Σ)',freq:'high'},
             {text:'两相短路 I=√3·E/(X1+X2)',freq:'high'},
             {text:'两相接地短路 复合序网并联',freq:'high'}],
        typicalQ:[{year:'2023',q:102,topic:'10kV母线三相短路I\" ich S\"',formula:'XΣ*=X_G*+X_T*+X_L*; I\"*=1/XΣ* ; ich=2.55·I\"'}],
        calcTip:'标幺值计算完后检查短路电流是否和经验同量级：10kV短路典型I\"=20-30kA左右'
      }
    ]},
    { idx:6, name:'电气设备选择', sections:[
      { idx:1, name:'断路器/隔离开关/CT PT/母线/电缆 六校验', video:{bvid:'BV1GL411y7Sb',page:27},
        kps:[{text:'UN选≥系统UN；IN≥最大长期工作电流',freq:'high'},
             {text:'动稳定：imax≥ich 或 I_dyn²·t≥i_ch²·Tch',freq:'high'},
             {text:'热稳定：I_t²·t≥I_∞²·t_eqima(含非周期+周期)',freq:'high'},
             {text:'开断能力：I_brk≥I\"(或短路全电流周期分量起始有效值)',freq:'high'},
             {text:'CT：一/二次侧额定比、准确级、额定容量、10%误差曲线',freq:'high'},
             {text:'PT：容量/准确级、保护用3P级、测量0.5级、剩余绕组3U0',freq:'high'}]
      }
    ]},
    { idx:7, name:'继电保护基础', sections:[
      { idx:1, name:'四性 / 三段式电流 / 距离 / 差动 / 变压器发电机保护', video:{bvid:'BV1GL411y7Sb',page:31},
        kps:[{text:'选择性/速动性/灵敏性/可靠性 四性平衡',freq:'high'},
             {text:'电流I段(速断)：I_op=K_rel·I_max³  无延时；保护范围不稳定首端一部分',freq:'high'},
             {text:'电流II段(限时速断)：I_op·0.5s时限+下一级I段配合 保全长',freq:'high'},
             {text:'电流III段(过电流)：I_op>最大负荷电流 阶梯时限 远后备',freq:'high'},
             {text:'距离I段：0.85·Z_line 无延时；II段与下级配合 保全长；III段远后备',freq:'high'},
             {text:'差动保护原理：环流法 正常/外部故障平衡电流≈0；内部故障两同相短路电流之和',freq:'high'},
             {text:'变压器保护主保护：差动+瓦斯；后备：过流/过负荷/零序/过励磁/油温',freq:'high'}]
      }
    ]},
    { idx:8, name:'过电压与接地', sections:[
      { idx:1, name:'雷电/操作/工频谐振 + 避雷器 + 接地电阻', video:{bvid:'BV1GL411y7Sb',page:36},
        kps:[{text:'避雷针保护范围：滚球法 h_r分别20/30/45/60m',freq:'high'},
             {text:'MOA氧化锌避雷器：无间隙无续流、通流大、保护好',freq:'high'},
             {text:'操作过电压：切空载变压器、合空载线路、间歇电弧接地、切空载长线',freq:'high'},
             {text:'工频过电压：空载长线路电容效应、不对称短路、甩负荷',freq:'mid'},
             {text:'保护接地 R≤4Ω；防雷接地 R≤10Ω；联合接地 R≤1Ω',freq:'high'}]
      }
    ]},
    { idx:9, name:'二次回路与直流系统', sections:[
      { idx:1, name:'断路器控制回路 / 防跳 / 操作电源 / 绝缘监察', video:{bvid:'BV1GL411y7Sb',page:40},
        kps:[{text:'防跳继电器：机械/电气 防止合闸脉冲未消时重复合闸跳闸',freq:'high'},
             {text:'直流操作电源：蓄电池组/高频开关/电容储能；UPS',freq:'high'},
             {text:'绝缘监察：平衡电桥 发生一点接地时给出告警',freq:'mid'}]
      }
    ]}
  ]);

  /* 组装5学科对象：供配电vs发输变电 qCount不同但章节相同 */
  function buildProfessional(){
    return [
      { key:'circuit', title:'电路与电磁场', color:'circuit', badges:['张工BV1yL411R7rr + 辅助BV1S24y1x7Rd'],
        hours:'≈29h', zhanggongBVs:['BV1yL411R7rr','BV1S24y1x7Rd'],
        qCountPD: {low:14,high:16,score:'28~32分'}, qCountPT:{low:16,high:18,score:'32~36分'},
        chapters: circuitChapters },
      { key:'analog', title:'模拟电子技术', color:'analog', badges:['张工BV1nT411B7j5'],
        hours:'≈12h46m', zhanggongBVs:['BV1nT411B7j5'],
        qCountPD: {low:8,high:10,score:'16~20分'}, qCountPT:{low:8,high:10,score:'16~20分'},
        chapters: analogChapters },
      { key:'digital', title:'数字电子技术', color:'digital', badges:['张工BV1Tk4y1q7L8'],
        hours:'≈13h09m', zhanggongBVs:['BV1Tk4y1q7L8'],
        qCountPD: {low:6,high:8,score:'12~16分'}, qCountPT:{low:6,high:8,score:'12~16分'},
        chapters: digitalChapters },
      { key:'machines', title:'电机学', color:'machines', badges:['张工BV1gN411w7ZW'],
        hours:'≈16h26m', zhanggongBVs:['BV1gN411w7ZW'],
        qCountPD: {low:6,high:8,score:'12~16分'}, qCountPT:{low:8,high:10,score:'16~20分'},
        chapters: machinesChapters },
      { key:'power', title:'电气工程基础', color:'power', badges:['张工BV1GL411y7Sb'],
        hours:'≈16h43m', zhanggongBVs:['BV1GL411y7Sb'],
        qCountPD: {low:18,high:20,score:'36~40分'}, qCountPT:{low:22,high:24,score:'44~48分'},
        chapters: powerChapters }
    ];
  }

  /* 导出全局对象 */
  window.BASIC = {
    powerDistribution: {
      summary: { totalCommonQuestions: 120, totalCommonScore: 240, /* 上午公共基础满分120题240分，这里只展示10科权重 */
                 totalProfessionalQuestions: 60, totalProfessionalScore: 120 },
      common: commonSubjects(),
      professional: buildProfessional()
    },
    powerTransmission: {
      summary: { totalProfessionalScore: 120, note:'发输变电与供配电同样120题；专业基础题量分布电机、电气工程基础占比提高' },
      common: commonSubjects(),
      professional: buildProfessional() /* 章节相同，题目权重差异在卡片header已用qCountPD/qCountPT分别展示 */
    }
  };
})();
