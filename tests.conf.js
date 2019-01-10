exports.config = {  
    seleniumAddress: 'http://localhost:4444/wd/hub', 
    //hangi adresin run edilecegi 
    getPageTimeout: 60000, 
    //page yuklenirken ne kadar beklenecek 
    allScriptsTimeout: 500000,
    //  page ile senkronize olunacak sure
      
    specs: ['*.spec.js'],  
    // spec'in locacitoni
  
    suites: {  
        suite1: 'spec/suite1/*.spec.js',  
        suite2: 'spec/suite2/*.spec.js'  
    },  
    //organized directories for suites -> suit1-2
    baseURL: 'http://localhost:8080/',  
    //Main URL to hit for testing
    framework: 'jasmine',  
    // prodactor'un hangi framework kullanacagi
};