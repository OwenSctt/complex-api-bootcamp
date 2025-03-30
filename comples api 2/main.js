document.querySelector('button').addEventListener('click',num)

function num(){
  const month = document.getElementById('month').value
  const day = document.getElementById('day').value
    fetch(`https://holidays.abstractapi.com/v1/?api_key=37d69fefecd84990888f24ae7a8fd955&country=US&year=2024&month=${month}&day=${day}`)
    .then(res => res.json())// parse response as JSON 
    .then(data => { 
      console.log(data)
      document.getElementById('date').innerHTML = data[0].date
      document.getElementById('location').innerHTML = data[0].location
      document.getElementById('holiday').innerHTML = data[0].name
      let count = data[0].date_day
    fetch(`https://jobicy.com/api/v2/remote-jobs?count=${count}&geo=usa`)
    .then(res => res.json())
    .then(data => {  // parse response as JSON  
      console.log(data)
      document.getElementById('job1name').innerHTML = data.jobs[0].companyName
      document.getElementById('job1title').innerHTML = data.jobs[0].jobTitle
      document.getElementById('job1desc').innerHTML = data.jobs[0].jobDescription
      document.getElementById('job1level').innerHTML = data.jobs[0].jobLevel
      document.getElementById('job1type').innerHTML = data.jobs[0].jobType
      document.getElementById('job1salmin').innerHTML = data.jobs[0].annualSalaryMin
      document.getElementById('job1salmax').innerHTML = data.jobs[0].annualSalaryMax
      document.getElementById('job1url').innerHTML = data.jobs[0].url

      document.getElementById('job2name').innerHTML = data.jobs[1].companyName
      document.getElementById('job2title').innerHTML = data.jobs[1].jobTitle
      document.getElementById('job2desc').innerHTML = data.jobs[1].jobDescription
      document.getElementById('job2level').innerHTML = data.jobs[1].jobLevel
      document.getElementById('job2type').innerHTML = data.jobs[1].jobType
      document.getElementById('job2salmin').innerHTML = data.jobs[1].annualSalaryMin
      document.getElementById('job2salmax').innerHTML = data.jobs[1].annualSalaryMax
      document.getElementById('job2url').innerHTML = data.jobs[1].url

      document.getElementById('job3name').innerHTML = data.jobs[2].companyName
      document.getElementById('job3title').innerHTML = data.jobs[2].jobTitle
      document.getElementById('job3desc').innerHTML = data.jobs[2].jobDescription
      document.getElementById('job3level').innerHTML = data.jobs[2].jobLevel
      document.getElementById('job3type').innerHTML = data.jobs[2].jobType
      document.getElementById('job3salmin').innerHTML = data.jobs[2].annualSalaryMin
      document.getElementById('job3salmax').innerHTML = data.jobs[2].annualSalaryMax
      document.getElementById('job3url').innerHTML = data.jobs[2].url

      document.getElementById('job4name').innerHTML = data.jobs[3].companyName
      document.getElementById('job4title').innerHTML = data.jobs[3].jobTitle
      document.getElementById('job4desc').innerHTML = data.jobs[3].jobDescription
      document.getElementById('job4level').innerHTML = data.jobs[3].jobLevel
      document.getElementById('job4type').innerHTML = data.jobs[3].jobType
      document.getElementById('job4salmin').innerHTML = data.jobs[3].annualSalaryMin
      document.getElementById('job4salmax').innerHTML = data.jobs[3].annualSalaryMax
      document.getElementById('job4url').innerHTML = data.jobs[3].url

      document.getElementById('job5name').innerHTML = data.jobs[4].companyName
      document.getElementById('job5title').innerHTML = data.jobs[4].jobTitle
      document.getElementById('job5desc').innerHTML = data.jobs[4].jobDescription
      document.getElementById('job5level').innerHTML = data.jobs[4].jobLevel
      document.getElementById('job5type').innerHTML = data.jobs[4].jobType
      document.getElementById('job5salmin').innerHTML = data.jobs[4].annualSalaryMin
      document.getElementById('job5salmax').innerHTML = data.jobs[4].annualSalaryMax
      document.getElementById('job5url').innerHTML = data.jobs[4].url

      document.getElementById('job6name').innerHTML = data.jobs[5].companyName
      document.getElementById('job6title').innerHTML = data.jobs[5].jobTitle
      document.getElementById('job6desc').innerHTML = data.jobs[5].jobDescription
      document.getElementById('job6level').innerHTML = data.jobs[5].jobLevel
      document.getElementById('job6type').innerHTML = data.jobs[5].jobType
      document.getElementById('job6salmin').innerHTML = data.jobs[5].annualSalaryMin
      document.getElementById('job6salmax').innerHTML = data.jobs[5].annualSalaryMax
      document.getElementById('job6url').innerHTML = data.jobs[5].url

      document.getElementById('job7name').innerHTML = data.jobs[6].companyName
      document.getElementById('job7title').innerHTML = data.jobs[6].jobTitle
      document.getElementById('job7desc').innerHTML = data.jobs[6].jobDescription
      document.getElementById('job7level').innerHTML = data.jobs[6].jobLevel
      document.getElementById('job7type').innerHTML = data.jobs[6].jobType
      document.getElementById('job7salmin').innerHTML = data.jobs[6].annualSalaryMin
      document.getElementById('job7salmax').innerHTML = data.jobs[6].annualSalaryMax
      document.getElementById('job7url').innerHTML = data.jobs[6].url

      document.getElementById('job8name').innerHTML = data.jobs[7].companyName
      document.getElementById('job8title').innerHTML = data.jobs[7].jobTitle
      document.getElementById('job8desc').innerHTML = data.jobs[7].jobDescription
      document.getElementById('job8level').innerHTML = data.jobs[7].jobLevel
      document.getElementById('job8type').innerHTML = data.jobs[7].jobType
      document.getElementById('job8salmin').innerHTML = data.jobs[7].annualSalaryMin
      document.getElementById('job8salmax').innerHTML = data.jobs[7].annualSalaryMax
      document.getElementById('job8url').innerHTML = data.jobs[7].url

      document.getElementById('job9name').innerHTML = data.jobs[8].companyName
      document.getElementById('job9title').innerHTML = data.jobs[8].jobTitle
      document.getElementById('job9desc').innerHTML = data.jobs[8].jobDescription
      document.getElementById('job9level').innerHTML = data.jobs[8].jobLevel
      document.getElementById('job9type').innerHTML = data.jobs[8].jobType
      document.getElementById('job9salmin').innerHTML = data.jobs[8].annualSalaryMin
      document.getElementById('job9salmax').innerHTML = data.jobs[8].annualSalaryMax
      document.getElementById('job9url').innerHTML = data.jobs[8].url

      document.getElementById('job10name').innerHTML = data.jobs[9].companyName
      document.getElementById('job10title').innerHTML = data.jobs[9].jobTitle
      document.getElementById('job10desc').innerHTML = data.jobs[9].jobDescription
      document.getElementById('job10level').innerHTML = data.jobs[9].jobLevel
      document.getElementById('job10type').innerHTML = data.jobs[9].jobType
      document.getElementById('job10salmin').innerHTML = data.jobs[9].annualSalaryMin
      document.getElementById('job10salmax').innerHTML = data.jobs[9].annualSalaryMax
      document.getElementById('job10url').innerHTML = data.jobs[9].url

      document.getElementById('job11name').innerHTML = data.jobs[10].companyName
      document.getElementById('job11title').innerHTML = data.jobs[10].jobTitle
      document.getElementById('job11desc').innerHTML = data.jobs[10].jobDescription
      document.getElementById('job11level').innerHTML = data.jobs[10].jobLevel
      document.getElementById('job11type').innerHTML = data.jobs[10].jobType
      document.getElementById('job11salmin').innerHTML = data.jobs[10].annualSalaryMin
      document.getElementById('job11salmax').innerHTML = data.jobs[10].annualSalaryMax
      document.getElementById('job11url').innerHTML = data.jobs[10].url

      document.getElementById('job12name').innerHTML = data.jobs[11].companyName
      document.getElementById('job12title').innerHTML = data.jobs[11].jobTitle
      document.getElementById('job12desc').innerHTML = data.jobs[11].jobDescription
      document.getElementById('job12level').innerHTML = data.jobs[11].jobLevel
      document.getElementById('job12type').innerHTML = data.jobs[11].jobType
      document.getElementById('job12salmin').innerHTML = data.jobs[11].annualSalaryMin
      document.getElementById('job12salmax').innerHTML = data.jobs[11].annualSalaryMax
      document.getElementById('job12url').innerHTML = data.jobs[11].url

      document.getElementById('job13name').innerHTML = data.jobs[12].companyName
      document.getElementById('job13title').innerHTML = data.jobs[12].jobTitle
      document.getElementById('job13desc').innerHTML = data.jobs[12].jobDescription
      document.getElementById('job13level').innerHTML = data.jobs[12].jobLevel
      document.getElementById('job13type').innerHTML = data.jobs[12].jobType
      document.getElementById('job13salmin').innerHTML = data.jobs[12].annualSalaryMin
      document.getElementById('job13salmax').innerHTML = data.jobs[12].annualSalaryMax
      document.getElementById('job13url').innerHTML = data.jobs[12].url

      document.getElementById('job14name').innerHTML = data.jobs[13].companyName
      document.getElementById('job14title').innerHTML = data.jobs[13].jobTitle
      document.getElementById('job14desc').innerHTML = data.jobs[13].jobDescription
      document.getElementById('job14level').innerHTML = data.jobs[13].jobLevel
      document.getElementById('job14type').innerHTML = data.jobs[13].jobType
      document.getElementById('job14salmin').innerHTML = data.jobs[13].annualSalaryMin
      document.getElementById('job14salmax').innerHTML = data.jobs[13].annualSalaryMax
      document.getElementById('job14url').innerHTML = data.jobs[13].url

      document.getElementById('job15name').innerHTML = data.jobs[14].companyName
      document.getElementById('job15title').innerHTML = data.jobs[14].jobTitle
      document.getElementById('job15desc').innerHTML = data.jobs[14].jobDescription
      document.getElementById('job15level').innerHTML = data.jobs[14].jobLevel
      document.getElementById('job15type').innerHTML = data.jobs[14].jobType
      document.getElementById('job15salmin').innerHTML = data.jobs[14].annualSalaryMin
      document.getElementById('job15salmax').innerHTML = data.jobs[14].annualSalaryMax
      document.getElementById('job15url').innerHTML = data.jobs[14].url

      document.getElementById('job16name').innerHTML = data.jobs[15].companyName
      document.getElementById('job16title').innerHTML = data.jobs[15].jobTitle
      document.getElementById('job16desc').innerHTML = data.jobs[15].jobDescription
      document.getElementById('job16level').innerHTML = data.jobs[15].jobLevel
      document.getElementById('job16type').innerHTML = data.jobs[15].jobType
      document.getElementById('job16salmin').innerHTML = data.jobs[15].annualSalaryMin
      document.getElementById('job16salmax').innerHTML = data.jobs[15].annualSalaryMax
      document.getElementById('job16url').innerHTML = data.jobs[15].url

      document.getElementById('job17name').innerHTML = data.jobs[16].companyName
      document.getElementById('job17title').innerHTML = data.jobs[16].jobTitle
      document.getElementById('job17desc').innerHTML = data.jobs[16].jobDescription
      document.getElementById('job17level').innerHTML = data.jobs[16].jobLevel
      document.getElementById('job17type').innerHTML = data.jobs[16].jobType
      document.getElementById('job17salmin').innerHTML = data.jobs[16].annualSalaryMin
      document.getElementById('job17salmax').innerHTML = data.jobs[16].annualSalaryMax
      document.getElementById('job17url').innerHTML = data.jobs[16].url

      document.getElementById('job18name').innerHTML = data.jobs[17].companyName
      document.getElementById('job18title').innerHTML = data.jobs[17].jobTitle
      document.getElementById('job18desc').innerHTML = data.jobs[17].jobDescription
      document.getElementById('job18level').innerHTML = data.jobs[17].jobLevel
      document.getElementById('job18type').innerHTML = data.jobs[17].jobType
      document.getElementById('job18salmin').innerHTML = data.jobs[17].annualSalaryMin
      document.getElementById('job18salmax').innerHTML = data.jobs[17].annualSalaryMax
      document.getElementById('job18url').innerHTML = data.jobs[17].url

      document.getElementById('job19name').innerHTML = data.jobs[18].companyName
      document.getElementById('job19title').innerHTML = data.jobs[18].jobTitle
      document.getElementById('job19desc').innerHTML = data.jobs[18].jobDescription
      document.getElementById('job19level').innerHTML = data.jobs[18].jobLevel
      document.getElementById('job19type').innerHTML = data.jobs[18].jobType
      document.getElementById('job19salmin').innerHTML = data.jobs[18].annualSalaryMin
      document.getElementById('job19salmax').innerHTML = data.jobs[18].annualSalaryMax
      document.getElementById('job19url').innerHTML = data.jobs[18].url

      document.getElementById('job20name').innerHTML = data.jobs[19].companyName
      document.getElementById('job20title').innerHTML = data.jobs[19].jobTitle
      document.getElementById('job20desc').innerHTML = data.jobs[19].jobDescription
      document.getElementById('job20level').innerHTML = data.jobs[19].jobLevel
      document.getElementById('job20type').innerHTML = data.jobs[19].jobType
      document.getElementById('job20salmin').innerHTML = data.jobs[19].annualSalaryMin
      document.getElementById('job20salmax').innerHTML = data.jobs[19].annualSalaryMax
      document.getElementById('job20url').innerHTML = data.jobs[19].url

      document.getElementById('job21name').innerHTML = data.jobs[20].companyName
      document.getElementById('job21title').innerHTML = data.jobs[20].jobTitle
      document.getElementById('job21desc').innerHTML = data.jobs[20].jobDescription
      document.getElementById('job21level').innerHTML = data.jobs[20].jobLevel
      document.getElementById('job21type').innerHTML = data.jobs[20].jobType
      document.getElementById('job21salmin').innerHTML = data.jobs[20].annualSalaryMin
      document.getElementById('job21salmax').innerHTML = data.jobs[20].annualSalaryMax
      document.getElementById('job21url').innerHTML = data.jobs[20].url

      document.getElementById('job22name').innerHTML = data.jobs[21].companyName
      document.getElementById('job22title').innerHTML = data.jobs[21].jobTitle
      document.getElementById('job22desc').innerHTML = data.jobs[21].jobDescription
      document.getElementById('job22level').innerHTML = data.jobs[21].jobLevel
      document.getElementById('job22type').innerHTML = data.jobs[21].jobType
      document.getElementById('job22salmin').innerHTML = data.jobs[21].annualSalaryMin
      document.getElementById('job22salmax').innerHTML = data.jobs[21].annualSalaryMax
      document.getElementById('job22url').innerHTML = data.jobs[21].url

      document.getElementById('job23name').innerHTML = data.jobs[22].companyName
      document.getElementById('job23title').innerHTML = data.jobs[22].jobTitle
      document.getElementById('job23desc').innerHTML = data.jobs[22].jobDescription
      document.getElementById('job23level').innerHTML = data.jobs[22].jobLevel
      document.getElementById('job23type').innerHTML = data.jobs[22].jobType
      document.getElementById('job23salmin').innerHTML = data.jobs[22].annualSalaryMin
      document.getElementById('job23salmax').innerHTML = data.jobs[22].annualSalaryMax
      document.getElementById('job23url').innerHTML = data.jobs[22].url

      document.getElementById('job24name').innerHTML = data.jobs[23].companyName
      document.getElementById('job24title').innerHTML = data.jobs[23].jobTitle
      document.getElementById('job24desc').innerHTML = data.jobs[23].jobDescription
      document.getElementById('job24level').innerHTML = data.jobs[23].jobLevel
      document.getElementById('job24type').innerHTML = data.jobs[23].jobType
      document.getElementById('job24salmin').innerHTML = data.jobs[23].annualSalaryMin
      document.getElementById('job24salmax').innerHTML = data.jobs[23].annualSalaryMax
      document.getElementById('job24url').innerHTML = data.jobs[23].url

      document.getElementById('job25name').innerHTML = data.jobs[24].companyName
      document.getElementById('job25title').innerHTML = data.jobs[24].jobTitle
      document.getElementById('job25desc').innerHTML = data.jobs[24].jobDescription
      document.getElementById('job25level').innerHTML = data.jobs[24].jobLevel
      document.getElementById('job25type').innerHTML = data.jobs[24].jobType
      document.getElementById('job25salmin').innerHTML = data.jobs[24].annualSalaryMin
      document.getElementById('job25salmax').innerHTML = data.jobs[24].annualSalaryMax
      document.getElementById('job25url').innerHTML = data.jobs[24].url

      document.getElementById('job26name').innerHTML = data.jobs[25].companyName
      document.getElementById('job26title').innerHTML = data.jobs[25].jobTitle
      document.getElementById('job26desc').innerHTML = data.jobs[25].jobDescription
      document.getElementById('job26level').innerHTML = data.jobs[25].jobLevel
      document.getElementById('job26type').innerHTML = data.jobs[25].jobType
      document.getElementById('job26salmin').innerHTML = data.jobs[25].annualSalaryMin
      document.getElementById('job26salmax').innerHTML = data.jobs[25].annualSalaryMax
      document.getElementById('job26url').innerHTML = data.jobs[25].url

      document.getElementById('job27name').innerHTML = data.jobs[26].companyName
      document.getElementById('job27title').innerHTML = data.jobs[26].jobTitle
      document.getElementById('job27desc').innerHTML = data.jobs[26].jobDescription
      document.getElementById('job27level').innerHTML = data.jobs[26].jobLevel
      document.getElementById('job27type').innerHTML = data.jobs[26].jobType
      document.getElementById('job27salmin').innerHTML = data.jobs[26].annualSalaryMin
      document.getElementById('job27salmax').innerHTML = data.jobs[26].annualSalaryMax
      document.getElementById('job27url').innerHTML = data.jobs[26].url

      document.getElementById('job28name').innerHTML = data.jobs[27].companyName
      document.getElementById('job28title').innerHTML = data.jobs[27].jobTitle
      document.getElementById('job28desc').innerHTML = data.jobs[27].jobDescription
      document.getElementById('job28level').innerHTML = data.jobs[27].jobLevel
      document.getElementById('job28type').innerHTML = data.jobs[27].jobType
      document.getElementById('job28salmin').innerHTML = data.jobs[27].annualSalaryMin
      document.getElementById('job28salmax').innerHTML = data.jobs[27].annualSalaryMax
      document.getElementById('job28url').innerHTML = data.jobs[27].url

      document.getElementById('job29name').innerHTML = data.jobs[28].companyName
      document.getElementById('job29title').innerHTML = data.jobs[28].jobTitle
      document.getElementById('job29desc').innerHTML = data.jobs[28].jobDescription
      document.getElementById('job29level').innerHTML = data.jobs[28].jobLevel
      document.getElementById('job29type').innerHTML = data.jobs[28].jobType
      document.getElementById('job29salmin').innerHTML = data.jobs[28].annualSalaryMin
      document.getElementById('job29salmax').innerHTML = data.jobs[28].annualSalaryMax
      document.getElementById('job29url').innerHTML = data.jobs[28].url

      document.getElementById('job30name').innerHTML = data.jobs[29].companyName
      document.getElementById('job30title').innerHTML = data.jobs[29].jobTitle
      document.getElementById('job30desc').innerHTML = data.jobs[29].jobDescription
      document.getElementById('job30level').innerHTML = data.jobs[29].jobLevel
      document.getElementById('job30type').innerHTML = data.jobs[29].jobType
      document.getElementById('job30salmin').innerHTML = data.jobs[29].annualSalaryMin
      document.getElementById('job30salmax').innerHTML = data.jobs[29].annualSalaryMax
      document.getElementById('job30url').innerHTML = data.jobs[29].url

      document.getElementById('job31name').innerHTML = data.jobs[30].companyName
      document.getElementById('job31title').innerHTML = data.jobs[30].jobTitle
      document.getElementById('job31desc').innerHTML = data.jobs[30].jobDescription
      document.getElementById('job31level').innerHTML = data.jobs[30].jobLevel
      document.getElementById('job31type').innerHTML = data.jobs[30].jobType
      document.getElementById('job31salmin').innerHTML = data.jobs[30].annualSalaryMin
      document.getElementById('job31salmax').innerHTML = data.jobs[30].annualSalaryMax
      document.getElementById('job31url').innerHTML = data.jobs[30].url
})})}
