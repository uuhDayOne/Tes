const Toxic = () => new Promise((resolve, reject) => {
  let kata = [
    'babi',
    'monyet',
    'anjing',
    'rizky',
    'jembut',
    'memek',
    'kontol',
    'tempik',
    'tempik',
    'gay',
    'lesbi',
    'yoga',
    'setan',
    'piyo',
    'cangcut',
    'bagong',
    'bangsat',
    'ngentot'
  ]
  let ZakKui = kata[Math.floor(Math.random() * kata.length)]
  let list = [
    `muka lo kek ${ZakKui}`, `anda tau ${ZakKui} ?`,`${ZakKui} Lo ${ZakKui}`,
    `ngapa ${ZakKui} ga seneng?`,`ribut sini lo ${ZakKui}`,`jangan ngakak lo ${ZakKui}`,
    `wey ${ZakKui}!!`,`aku sih owh aja ya ${ZakKui}`,`ga seneng send lokasi lo ${ZakKui}`,
    `capek w ${ZakKui}`, `hari ini kau minat gelut ${kata[2]} ?`, `w tw lo itu ${ZakKui}`,
    `w ganteng dan lo kek ${ZakKui}`,`bucin lo ${ZakKui}`,
    `najis baperan kek ${ZakKui}`,
    `nge-teh ${ZakKui}`,`gaya lo sok iye, mukalo kek ${ZakKui}`,`${ZakKui} awokwowkok`
  ]
  resolve(list[Math.floor(Math.random() * list.length)])
})

module.exports = { Toxic }