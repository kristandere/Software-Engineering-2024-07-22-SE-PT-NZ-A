function printObjectives(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  const sydney = {
  name: 'Sydney',
  population: 5_121_000,
  state: 'NSW',
  founded: '26 January 1788',
  timezone: 'Australia/Sydney'
  }
  
  const manila = {
    name: 'Manila',
    population: 14_942_000,
    state: 'NCR',
    founded: '24 June 1571',
    timezone: 'Philippines/Manila'
    }
    console.log('Sydney:');
    printObjectives(sydney);
  
    console.log('Manila:');
    printObjectives(manila);
  