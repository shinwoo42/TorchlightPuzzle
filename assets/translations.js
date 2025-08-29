window.translations = {
  "六神石板": "Six Gods Slate",
  "末神泪珠": "Last God's Tears",
  "群星辉陨": "Starfall",
  "神性一角": "A Corner of Divinity",
  "星星蛾火": "Sparks of Moth Fire",
  "蛾火燎原之刻": "When Sparks Set the Prairie Ablaze",
  "寰空神隙": "Space Rift",

  "额外物理伤害": "Additional Physical Damage",
  "额外攻击伤害": "Additional Attack Damage",
  "额外哨卫伤害": "Additional Sentry Damage",
  "额外火焰伤害": "Additional Fire Damage",
  "额外冰冷伤害": "Additional Cold Damage",
  "额外闪电伤害": "Additional Lightning Damage",
  "额外法术伤害": "Additional Spell Damage",
  "额外腐蚀伤害": "Additional Erosion Damage",
  "额外持续伤害": "Additional Damage over Time",
  "额外召唤物伤害": "Additional Minion Damage",
  "额外攻击速度": "Additional Attack Speed",
  "额外施法速度": "Additional Cast Speed",

  "复制单向相邻": "Copy Directional Adjacent",
  "复制四周相邻": "Copy All Adjacent",
  "相邻加成": "Adjacent Bonus",

  "可使用键盘移动石板，删除(Delete)，或者旋转(R)": "Use the keyboard to move slates, delete (Delete), or rotate (R)",
  "小技巧-先摆边上的石板，最后再摆薯条，才不容易卡住": "Tip: Place the side slates first, then the fries, to avoid getting stuck",
  "新神秩序石板属性计算模拟器": "New God Order Slate Attribute Calculator",
  "等效增伤倍率 (简化)": "Equivalent Damage Increase Multiplier (Simplified)",
  "导入": "Import",
  "导出": "Export",

  "秩序效果增幅": "Order Effect Amplification",
  "二律背反": "Antinomy",
  "双手序列": "Two-handed Sequence",
  "群星定势": "Tendency of Stars",
  "石板库": "Slate Library",
  "重置棋盘": "Reset Board",

  "石板位置冲突": "Slate Position Conflict",
  "置入该石板会移除": "Placing this slate will remove",
  "块产生冲突的石板，仍要置入？": "conflicting slates. Still place?",
  "取消": "Cancel",
  "置入": "Place",
  "点击置入石板": "Click to place a slate",
  "未选中石板": "No Slate Selected",

  "总属性加成": "Total Attribute Bonus",
  "暂无属性": "No Attributes",
  "秩序值效果": "Order Value Effect",
  "未瓦（秩序值效果+50%）": "Uncorroded (Order Value Effect +50%)",
  "单瓦（秩序值效果+55%）": "Single corrode (Order Value Effect +55%)",
  "双瓦（秩序值效果+60%）": "Double corrode (Order Value Effect +60%)",
  "未知石板": "Unknown Slate",

  "空置": "Empty",
  "额外": "Extra",
  "操作": "Actions",
  "旋转": "Rotate",
  "水平翻转": "Flip Horizontal",
  "垂直翻转": "Flip Vertical",
  "移除": "Remove",
  "固有属性": "Inherent Attributes",
  "选择属性": "Select Attribute",
  "空": "Empty",
  "共计": "Total",
  "条新神属性": "New God Attributes",
  "相邻石板的常规属性加成+10%": "+10% to normal attributes of adjacent slates",
  "影响": "Affects",
  "共": "Total",
  "条": "items",
  "上": "top",
  "下": "bottom",
  "左": "left",
  "右": "right",
  "复制": "Copy ",
  "侧相邻石板的最后一条属性": " adjacent slate's last attribute",
  "复制于": "Copied from",
  "动态获得属性": "Dynamically Gained Attributes",
  "棋盘上已没有足够空间置入该石板。": "There is not enough space on the board to place this slate.",
  "该类石板已达可置入上限，无法置入！": "This type of slate has reached the placement limit and cannot be placed.",
  "复制四周相邻石板的最后一条属性": "Copy the last attribute of surrounding slates",
  "侧所有相邻石板的常规属性": " adjacent slates' normal attributes",
  "已置入的石板": "Placed Slates"
}

window.missingTranslations = {};
window.getTranslation = function(key) {
  if (window.translations && window.translations[key]) {
    return window.translations[key];
  }
  window.missingTranslations[key] = "";
  return key;
};
