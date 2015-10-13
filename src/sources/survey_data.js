let survey = [
  {
    question: '政府應該為最低工資立法',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '在重大工程的決策中，個人利益應為社會整體利益讓路',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '如果食品價格過高，政府應當干預',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '試圖控制房地產價格的行為會破壞經濟發展',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: 2 },
      { optionText: '同意', optionScore: 1 },
      { optionText: '反對', optionScore: -1 },
      { optionText: '強烈反對', optionScore: -2 }
    ]
  },
  {
    question: '教育應當儘可能公營',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '改善低收入人士生活的首要手段是政府給予財政補貼和扶持',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '以資本生財的人對社會的貢獻比不上靠勞動賺錢的人',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '政府應對商品的出入境設限，以首先滿足境內需求',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '人民根本上是通過階級而非國籍來劃分的',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '控制通貨膨脹比控制失業更重要',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: 2 },
      { optionText: '同意', optionScore: 1 },
      { optionText: '反對', optionScore: -1 },
      { optionText: '強烈反對', optionScore: -2 }
    ]
  },
  {
    question: '企業不會自覺保護環境，因此需要規章來規範它們',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '「各盡所能，各取所需」是個很棒的念頭',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '社會中一些基本事物如飲用水不應該成為貨架上的商品',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '土地完全可以作為商品在市場上自由買賣',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: 2 },
      { optionText: '同意', optionScore: 1 },
      { optionText: '反對', optionScore: -1 },
      { optionText: '強烈反對', optionScore: -2 }
    ]
  },
  {
    question: '保護主義對貿易來說有時候是必須的',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '公司為它的股東賺取利潤就是它僅有的社會職責',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: 2 },
      { optionText: '同意', optionScore: 1 },
      { optionText: '反對', optionScore: -1 },
      { optionText: '強烈反對', optionScore: -2 }
    ]
  },
  {
    question: '對富人徵收的稅太高了',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: 2 },
      { optionText: '同意', optionScore: 1 },
      { optionText: '反對', optionScore: -1 },
      { optionText: '強烈反對', optionScore: -2 }
    ]
  },
  {
    question: '那些付得起錢的人理應有權獲得更好的醫療',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: 2 },
      { optionText: '同意', optionScore: 1 },
      { optionText: '反對', optionScore: -1 },
      { optionText: '強烈反對', optionScore: -2 }
    ]
  },
  {
    question: '政府應該懲罰誤導公眾的商業行為',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: -2 },
      { optionText: '同意', optionScore: -1 },
      { optionText: '反對', optionScore: 1 },
      { optionText: '強烈反對', optionScore: 2 }
    ]
  },
  {
    question: '市場越自由，人民越自由',
    optionType: 'multipleChoice',
    options: [
      { optionText: '強烈同意', optionScore: 2 },
      { optionText: '同意', optionScore: 1 },
      { optionText: '反對', optionScore: -1 },
      { optionText: '強烈反對', optionScore: -2 }
    ]
  },
  {
    question: '年齡',
    optionType: 'slider',
    optionMin: 1,
    optionMax: 100
  },
  {
    question: '學歷',
    optionType: 'multipleChoice',
    options: [
      { optionText: '小學', optionScore: 0 },
      { optionText: '中學', optionScore: 0 },
      { optionText: '大專', optionScore: 0 },
      { optionText: '大學或以上', optionScore: 0 }
    ]
  },
  {
    question: '性別',
    optionType: 'multipleChoice',
    options: [
      { optionText: '男', optionScore: 0 },
      { optionText: '女', optionScore: 0 },
      { optionText: '不確定', optionScore: 0 },
      { optionText: '皆非', optionScore: 0 }
    ]
  }
]

export default survey
