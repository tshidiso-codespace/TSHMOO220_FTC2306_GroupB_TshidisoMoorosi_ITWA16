const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const fragm1 = document.createDocumentFragment();
  let title1 = document.createElement('h2');
  let list1 = document.createElement('dl');
  title1.textContent = data.response.data.NM372.id
  fragm1.appendChild(title1);
  fragm1.appendChild(list1)
  const section1 = document.querySelector('[data-athlete="NM372"]')
  section1.appendChild(fragm1)

  const fragm2 = document.createDocumentFragment();
  let title2 = document.createElement('h2');
  let list2 = document.createElement('dl');
  title2.textContent = data.response.data.SV782.id
  fragm2.appendChild(title2);
  fragm2.appendChild(list2)
  const section2 = document.querySelector('[data-athlete="SV782"]')
  section2.appendChild(fragm2)

  
  //const createHtml = (NM372) => {
//let athlete1 = data.response.data.NM372
    //const {firstName, surname, id, races} = NM372
    //[date], [time] = races.reverse()
    let athlete = data.response.data.NM372;
    let isodate = new Date(athlete.races[athlete.races.length-1].date)
    let day = isodate.getDate();
    let month = MONTHS[isodate.getMonth()];
    let year = isodate.getFullYear();
  
    let [first, second, third, fourth] = athlete.races[athlete.races.length-1].time;
    let total = first + second + third + fourth;
  
    let hours = Math.floor(total/60);
    let minutes = Math.round((total/60 - Math.floor(total/60))*60)
  let firstName = athlete.firstName
console.log([first, second, third, fourth])
  console.log(total)

  list1.innerHTML = `
      <dt>Athlete:</dt>
      <dd>${athlete.firstName} ${athlete.surname}</dd>
  
      <dt>Total Races:</dt>
      <dd>${athlete.races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2,'0')}:${minutes}</dd>
      `
  
      athlete = data.response.data.SV782;
      isodate = new Date(athlete.races[athlete.races.length-1].date)
      day = isodate.getDate();
      month = MONTHS[isodate.getMonth()];
      year = isodate.getFullYear();
    
      [first, second, third, fourth] = athlete.races[athlete.races.length-1].time;
      total = first + second + third + fourth;
    
      hours = Math.floor(total/60);
      minutes = Math.round((total/60 - Math.floor(total/60))*60)
    firstName = athlete.firstName
  console.log([first, second, third, fourth])
    console.log(total)
  
    list2.innerHTML = `
        <dt>Athlete:</dt>
        <dd>${athlete.firstName} ${athlete.surname}</dd>
    
        <dt>Total Races:</dt>
        <dd>${athlete.races.length}</dd>
    
        <dt>Event Date (Latest)</dt>
        <dd>${day} ${month} ${year}</dd>
    
        <dt>Total Time (Latest)</dt>
        <dd>${hours.toString().padStart(2,'0')}:${minutes}</dd>
        `



    //fragment.appendChild(list1);
  //}
  
  //[NM372], [SV782] = data
  // document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
  // document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));