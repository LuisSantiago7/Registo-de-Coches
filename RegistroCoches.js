class Auto{
    constructor(brand, model, color, year, titular, price, photo, name){
        this.brand = brand
        this.model = model
        this.color = color
        this.year = year
        this.titular = titular
        this.price = price
        this.photo = photo
        this.name = name
    }
}


let arrayCoches = [
    //Acura
     acuraNSXConcept2012 = new Auto("Acura", "NSX Concept", "Blanco", 2012, "Luis Eleazar", "$4,400,000.00", "./assets/Acura_NSX_Concept_2012_1000_0001.jpg", "Acura NSX Concept 2012"),
    
    //Auburn
     auburnBoattailSpeedster8115 = new Auto("Auburn", "Boattail Speedster 8-115", "Rojo", 1931, "Martinez Martinez", "200,000,000.00", "./assets/Auburn_Boattail_Speedster_8-115_HQinterior_wEngine_1928_1000_0001.jpg","Auburn Boattail Speedster 8-115 1931"),
    
    //Audi
     audiR82016 =  new Auto("Audi", "R8", "Azul", 2016, "Jes Santiago", "4.390.000.00", "./assets/Audi_R8_Mk2_2016_600_0001.jpg", "Audi R8 2016"),
     audiR84sCoupeV102019 =  new Auto("Audi", "R8 4s Coupe V10", "Azul", 2019, "Laura Santiago", "$3,500,000.00", "./assets/Audi_R8_Mk2f_4S_coupe_V10_HQinterior_2019_1000_0001.jpg", "Audi R8 4S coupe V10 2019"),
     audiR84SSpyderV10UsSpec2022 =  new Auto("Audi", "R8 4S spyder V10 US-spec", 2022, "Luis Santiago", "$5,047,193.00", "./assets/Audi_R8_Mk2f_4S_spyder_V10_US-spec_HQinterior_2019_1000_0001.jpg", "Audi R8 4S spyder V10 US-spec 2022"),
    //BMW
     bmwI8 =  new Auto("BMW", "i8", "Blanco", 2013, "Luis Eleazar", "$2,199,900.00", "./assets/BMW-i8.jpg", "BMW i8"),
    
    //Bugatti
     bugattiBolide2021 =  new Auto("Bugatti", "Bolide", "Negro", 2021, "Eleazar Luis", "$81,760,000.00", "./assets/Bugatti_Bolide_2021_1000_0001.jpg", "Bugatti Bolide 2021"),
     bugattiDivo2019 =  new Auto("Bugatti", "Divo", "Negro", 2019, "Eleazar Santiago", "$112,420,000.00", "./assets/Bugatti_Divo_HQinterior_2019_1000_0001.jpg", "Bugatti Divo 2019"),
     bugattiLaVoitureNoire2019 =  new Auto("Bugatti", "La Voiture Noire", "Negro", 2019, "Ofelia Santiago", "$266,000,000.00", "./assets/Bugatti_La_Voiture_Noire_2019_600_0001.jpg", "Bugatti La Voiture Noire 2019"),
     bugattiVeyronGrandSportWorldRecordEdition2011 =  new Auto("Bugatti", "Veyron Grand-Sport World Record Edition 2011", "Naranja", 2011, "Carlos Santiago", "$50,000,000.00", "./assets/Bugatti_Veyron_Grand-Sport_World-Record-Edition_2011_600_0001.jpg", "Bugatti Veyron Grand-Sport World Record Edition 2011"),
     bugattiW16Mistral2024 =  new Auto("Bugatti", "W16 Mistral", "Amarillo", 2024, "Juan Carlos Santiago", "$113,000,000.00", "./assets/Bugatti_W16_Mistral_2024_1000_0001.jpg", "Bugatti W16 Mistral 2024"),
    
    //Chevrolet
     chevroletCamaro2SSRSConvertible2011 =  new Auto("Chevrolet", "Camaro 2SS RS Convertible 2011", "Blanco", 2011, "Arturo Rueda", "$1,439,872.00", "./assets/Chevrolet_Camaro_2SS_RS_Convertible_2011_600_0001.jpg", "Chevrolet Camaro 2SS RS Convertible 2011"),
     chevroletCamaroBumblebeeConcept2017 =  new Auto("Chevrolet", "Camaro Bumblebee concept 2017", "Amarillo Canario", 2017, "Luis Angel Eleazar Santiago", "$1,539,872.00","./assets/Chevrolet_Camaro_Bumblebee_concept_2017_600_0001.jpg", "Chevrolet Camaro Bumblebee concept 2017"),
     chevroletCamaroConvertibleBlackHawks2011 =  new Auto("Chevrolet", "Camaro Convertible BlackHawks", "Blanco", 2011, "Raul Hernandez", "$2,539,872.00", "./assets/Chevrolet_Camaro_Convertible_BlackHawks_HQinterior_2011_600_0001.jpg", "Chevrolet Camaro Convertible BlackHawks 2011"),
     chevroletCamaroCoupeZ28PaceCar2014 =  new Auto("Chevrolet", "camaro", "Negro Carbon", 2014, "Arturo Hernandez", "$450,000.00", "./assets/Chevrolet_Camaro_Mk5f_coupe_Z28_Pace_Car_2014_600_lq_0001.jpg", "Chevrolet Camaro coupe Z28 Pace Car 2014"),
     chevroletCamaroSSIndy500PaceCar2016 =  new Auto("Chevrolet", "Camaro SS Indy 500 Pace Car", "Blanco", 2016, "Raul Rueda", "$670,000", "./assets/Chevrolet_Camaro_Mk6_SS_Indy_500_Pace_Car_2016_600_0001.jpg", "Chevrolet Camaro SS Indy 500 Pace Car 2016"),
     chevroletCamaroSS2020 =  new Auto("Chevrolet", "Camaro SS", "Negro Carbon", 2020, "Emmanuel Nateras", "$1,414,900.00", "./assets/Chevrolet_Camaro_Mk6_SS_Indy_500_Pace_Car_2016_600_0001.jpg", "Chevrolet Camaro SS 2020"),
     chevroletCorvetteC8Stingray2020 =  new Auto("Chevrolet", "Corvette C8 Stingray", "Rojo", 2020, "Emmanuel Gonzales", "$1,849,900.00", "./assets/Chevrolet_Corvette_Mk8_C8_Stingray_2020_600_0001.jpg", "Chevrolet Corvette C8 Stingray 2020"),
     chevroletCorvetteZ06 =  new Auto("Chevrolet", "Corvette Z06", "Amarillo", 2014, "Luis Eleazar", "$3,904,900.00", "./assets/Chevrolet_Corvette_Z06_1000_0001.jpg", "Chevrolet Corvette Z06"),
    
    //Devel
     develSixteen2014 =  new Auto("Devel", "Sixteen 201", "Blanco", 2014, "Luis Angel Eleazar Santiago", "$30,914,568.00", "./assets/Devel_Sixteen_2014_1000_0001.jpg", "Devel Sixteen 2014"),
    
    //Dodge
     dodgeChallengerLCSRTHellcatWideBody2018 =  new Auto("Dodge", "Challenger LC SRT Hellcat WideBody", "Blanco", 2018, "Nateras Gonzales", "$2,000,000.00", "./assets/Dodge_Challenger_Mk2f_LC_SRT_Hellcat_WideBody_2018_600_0001.jpg", "Dodge Challenger SRT Hellcat WideBody 2018"),
     dodgeChargerLDSRTHellcatWidebody2020 =  new Auto("Dodge", "Charger LD SRT Hellcat Widebody", "Blue", 2020, "Salvador Espinoza", "$1,350,000.00", "./assets/Dodge_Charger_Mk7f_LD_SRT_Hellcat_Widebody_2020_600_0001.jpg", "Dodge Charger LD SRT Hellcat Widebody 2020"),
    
    //Duesenberg
     duesenbergModelJWilloughbyLimousine1931 =  new Auto("Duesenberg", "Model J Willoughby Limousine", "Rojo", 1931, "Salvador Reyes", "$40,368,000.00", "./assets/Duesenberg_Model_J_Willoughby_Limousine_HQinterior_wEngine_1931_1000_0001.jpg", "Duesenberg Model J Willoughby Limousine 1931"),
    
    //Ferrari
     ferrari458Italia2009 =  new Auto("Ferrari", "458 Italia", "Rojo Ferrari", 2009, "Jose Espinoza", "$7,600,000.00", "./assets/Ferrari_458_Italia_2009_600_0001.jpg", "Ferrari 458 Italia 2009"),
     ferrari488GTB2016 =  new Auto("Ferrari", "488 GTB", "Rojo Ferrari", 2016, "Jose Reyes", "$6,182,913.60", "./assets/Ferrari_488_GTB_HQinterior_2016_600_0001.jpg", "Ferrari 488 GTB 2016"),
     ferrariF8Tributo2019 =  new Auto("Ferrari", "F8 Tributo", "Rojo La Ferrari", 2019, "Luis Eleazar", "$6,500,000.00", "./assets/Ferrari_F8_Tributo_HQinterior_2019_600_0001.jpg", "Ferrari F8 Tributo 2019"),
     ferrariF401987 =  new Auto("Ferrari", "F40 1987", "Rojo Ferrari", 1987, "Misael Mendez", "$160,000,000.00", "./assets/Ferrari_F40_HQinterior_wEngine_1987_1000_0001.jpg", "Ferrari F40 1987"),
     ferrariFXXK2015 =  new Auto("Ferrari", "FXX-K", "Rojo La Ferrari", 2015, "Luis Eleazar", "$40,000,000.00", "./assets/Ferrari_FXX_K_HQinterior_2015_600_0001.jpg", "Ferrari FXX-K 2015"),
     ferrariSF90Stradale2020 =  new Auto("Ferrari", "SF90 Stradale", "Rojo Ferrari", 2020, "Misael Martinez", "10,001,772.00", "./assets/Ferrari_SF90_Stradale_HQinterior_wEngine_2020_1000_0001.jpg", "Ferrari SF90 Stradale 2020"),
    
     forfordMustangfastback1965 =  new Auto("Ford", "Mustang fastback", "Azul", 1965, "Yael Mendez", "$2,350,000.00", "./assets/Ford_Mustang_Mk1_fastback_1965_600_0001.jpg","Ford Mustang fastback 1965"),
     fordMustangGT2015 =  new Auto("Ford", "Mustang GT", "Rojo", 2015, "Arturo Hernandez", "$698,000.00", "./assets/Ford_Mustang_Mk6_GT_2015_600_0001.jpg", "Ford Mustang GT 2015"),
     fordMustangcoupeShelbyGT5002020 =  new Auto('Ford', 'Mustang coupe Shelby GT500', "Rojo", 2020, "Misael Yael", "$2,300,000.00", "./assets/Ford_Mustang_Mk6f_coupe_Shelby_GT500_2020_600_0001.jpg", "Ford Mustang coupe Shelby GT500 2020"),
    
    //Hispano-Suiza
     hispanoSuizaK61937 =  new Auto('Hispano-Suiza', 'K6', "Negro", 1937, "Aisha Ibrahim", "$250,000,000.00", "./assets/Hispano-Suiza_K6_HQinterior_wEngine_1937_1000_0001.jpg", "Hispano-Suiza K6 1937"),
    
    // Lamborghini
     lamborghiniAventadorLB834LP7504MansorySuperveloceJS1Edition2016 =  new Auto('Lamborghini', 'Aventador LB834 LP 750-4 Mansory Superveloce JS1 Edition', "Negro", 2016, "Mohammed Hassan", "$4,500,000.00", "./assets/Lamborghini_Aventador_LB834_LP_750-4_Mansory_Superveloce_JS1_Edition_2016_600_lq_0001.jpg", "Lamborghini Aventador LB834 LP 750-4 Mansory Superveloce JS1 Edition 2016"),
     lamborghiniAventadorLB834LP7504Superveloce2015 =  new Auto('Lamborghini', 'Aventador LB834 LP 750-4 Superveloce', "Rojo", 2015, "Fatoumata Diallo", "$11,729,350.80", "./assets/Lamborghini_Aventador_LB834_LP_750-4_Superveloce_2015_600_0001.jpg","Lamborghini Aventador LB834 LP 750-4 Superveloce 2015"),
     lamborghiniCentenariocoupe2017 =  new Auto('Lamborghini', 'Centenario coupe', "Gris", 2017, "Kwame Nkrumah", "$35,000,000.00", "./assets/Lamborghini_Centenario_coupe_2017_600_0001.jpg", "Lamborghini Centenario coupe 2017"),
     lamborghiniCountach5000QV1985 =  new Auto('Lamborghini', 'Countach 5000 QV', "Blanco", 1985, "Wangari Maathai", "$15,000,000.00", "./assets/Lamborghini_Countach_5000_QV_1985_1000_0001.jpg", "Lamborghini Countach 5000 QV 1985"),
     lamborghiniEgoistaconcept2013 =  new Auto('Lamborghini', 'Egoista concept', "Gris", 2013, "Luis Eleazar", "$1,998,672,500.00", "./assets/Lamborghini_Egoista_concept_2013_1000_0001.jpg", "Lamborghini Egoista concept 2013"),
     lamborghiniHuracanLB724EVORWDSpyder2020 =  new Auto('Lamborghini', 'Huracan LB724 EVO RWD Spyder', "Azul", 2020, "Li Chen", "$5,000,000.00", "./assets/Lamborghini_Huracan_LB724_EVO_RWD_Spyder_HQinterior_2020_1000_0001.jpg", "Lamborghini Huracan LB724 EVO RWD Spyder 2020"),
     lamborghiniHuracanLB724Performante2017 =  new Auto('Lamborghini', 'Huracan LB724 Performante', "Amarillo", 2017, "Sakura Tanaka", "$5,400,000.00", "./assets/Lamborghini_Huracan_LB724_Performante_HQinterior_2017_1000_0001.jpg", "Lamborghini Huracan LB724 Performante 2017"),
     lamborghiniHuracanLP6104LB7242014 =  new Auto('Lamborghini', 'Huracan LP 610-4 LB724', "Gris", 2014, "Narendra Modi", "$4,200,000.00", "./assets/Lamborghini_Huracan_LP_610-4_LB724_2014_1000_0001.jpg", "Lamborghini Huracan LP 610-4 LB724 2014"),
     lamborghiniSestoElemento2011 =  new Auto('Lamborghini', 'Sesto Elemento', "Gris", 2011, "Malala Yousafzai", "$42,000,000.00", "./assets/Lamborghini_Sesto_Elemento_2011_1000_0001.jpg", "Lamborghini Sesto Elemento 2011"),
     lamborghiniSian2020 =  new Auto('Lamborghini', 'Sian', "Verde olivo", 2020, "Luis Santiago", "$80,000,000.00", "./assets/Lamborghini_Sian_HQinterior_2020_600_0001.jpg", "Lamborghini Sian 2020"),
     lamborghiniV12VisionGranTurismoconcept2020 =  new Auto('Lamborghini', 'V12 Vision Gran Turismo concept', "Verde Olivo", 2020, "Luis Angel", "$67,284,648.00", "./assets/Lamborghini_V12_Vision_Gran_Turismo_concept_2020_600_0001.jpg","Lamborghini V12 Vision Gran Turismo concept 2020"),
     lamborghiniVenenoLP75042013 =  new Auto('Lamborghini', 'Veneno LP750-4', "Plata", 2013, "Eleazar Santiago", "$168,000,000.00", "./assets/Lamborghini_Veneno_LP750-4_HQinterior_2013_600_0001.jpg", "Lamborghini Veneno LP750-4 2013"),
    
    // McLaren
     mcLaren650SCanAm2016 =  new Auto('McLaren', '650S Can Am', "Rojo", 2016, "Maria Rossi", "$5,400,000.00", "./assets/McLaren_650S_Can_Am_HQinterior_2016_600_0001.jpg", "McLaren 650S Can Am 2016"),
     mcLaren720S2020 =  new Auto('McLaren', '720S', "Naranja", 2020, "Pierre Dupont", "$6,200,000.00", "./assets/McLaren_720S_HQinterior_2020_1000_0001.jpg", "McLaren 720S 2020"),
     mcLarenP12013 =  new Auto('McLaren', 'P1', "Amarillo Canario", 2013, "Hans Müller", "$24,000,000.00", "./assets/McLaren_P1_HQinterior_2013_600_0001.jpg", "McLaren P1 2013"),
    
    // Mercedes-Benz
     mercedesBenzAMGGTR2016 =  new Auto('Mercedes-Benz', 'AMG GT R', "Verde", 2016, "Ivan Ivanov", "$3,000,000.00", "./assets/Mercedes-Benz_AMG_GT_R_2016_600_0001.jpg", "Mercedes-Benz AMG GT R 2016"),
     mercedesBenzAMGGTX29063S4doorcoupe2019 =  new Auto('Mercedes-Benz', 'AMG GT X290 63 S 4door coupe', "Negro", 2019, "Ana García", "$4,200,000.00", "./assets/Mercedes-Benz_AMG_GT_X290_63_S_4door_coupe_2019_600_0001.jpg", "Mercedes-Benz AMG GT X290 63 S 4door coupe 2019"),
     mercedesBenzSLSclass2011 =  new Auto('Mercedes-Benz', 'SLS-class', "Blanco", 2011, "David Smith", "$2,550,000.00", "./assets/Mercedes-Benz_SLS-class_HQinterior_2011_600_0001.jpg", "Mercedes-Benz SLS-class 2011"),
     mercedesBenzVisionAVTR2020 =  new Auto('Mercedes-Benz', 'Vision AVTR', "Negro Carbon", 2020, "Emily Jones", "$100,000,000.00", "./assets/Mercedes-Benz_Vision_AVTR_HQinterior_2020_1000_0001.jpg", "Mercedes-Benz Vision AVTR 2020"),
    
    // Nissan
     nissanGTRR352017 =  new Auto('Nissan', 'GT-R R35', "Naranja", 2017, "Juan García", "$2,200,000.00","./assets/Nissan_GT-R_Mk1f_R35_2017_600_0001.jpg", "Nissan GT-R R35 2017"),
     nissanGTR502019 =  new Auto('Nissan', 'GT-R50', "Liquid Kinetic Gray", 2019, "Josê Hernandez", "$33,000,000.00", "./assets/Nissan_GT-R50_HQinterior_2019_1000_0001.jpg", "Nissan GT-R50 2019"),
    
    // Porsche
     porsche911930Turbo1974 =  new Auto('Porsche', '911 930 Turbo', "Plata", 1974, "Dwayne Johnson", "$900,000.00", "./assets/Porsche_911_Mk2_930_Turbo_1974_600_0001.jpg", "Porsche 911 930 Turbo 1974"),
     porsche911992Carreracabrio4S2019 =  new Auto('Porsche', '911 992 Carrera cabrio 4S', "Liquid Kinetic Gray", 2019, "Mariana Silva", "$3,400,000.00", "./assets/Porsche_911_Mk8_992_Carrera_cabriolet_4S_HQinterior_2019_1000_0001.jpg", "Porsche 911 992 Carrera cabriolet 4S 2019"),
    
    // Tesla
     teslaModelS2013 =  new Auto('Tesla', 'Model S', "Blanco", 2013, "Emma Jackson", "$510,000.00", "./assets/Tesla_Model_S_2013_600_0001.jpg", "Tesla Model S 2013"),
     teslaModelSP90D2016 =  new Auto('Tesla', 'Model S P90D', "Rojo", 2016, "David Lee", "$2,500,000.00", "./assets/Tesla_Model_S_Mk1f_P90D_HQinterior_2016_600_0001.jpg", "Tesla Model S P90D 2016"),
     teslaModelSPlaid2021 =  new Auto('Tesla', 'Model S Plaid', "Rojo", 2021, "Maria Brown", "$4,000,000", "./assets/Tesla_Model_S_Mk1f_Plaid_2021_1000_0001.jpg", "Tesla Model S Plaid 2021"),
    
    // W-Motors
     wMotorsLykanhypersport2012 =  new Auto('W-Motors', 'Lykan hypersport', "Blanco", 2012, "Luis Angel Eleazar Santiago", "$70,000,000.00", "./assets/W-Motors_Lykan_hypersport_2012_1000_0001.jpg", "W-Motors Lykan hypersport 2012")
    ]
//
function getAuto(){
    //get Buttons
    let buttonSaleAuto = document.getElementById("forSaleAuto")
    let buttonseeAuto = document.getElementById("seeAuto")
    let buttonOnAuto = document.getElementById("onAuto")
    let buttonEleccionAuto = document.getElementById("autoEleccion")

    //Array of buttons 
    let arrayButtons = [buttonSaleAuto, buttonseeAuto, buttonOnAuto]

    //iterate in array of buttons to remove class hidden
    for(let i of arrayButtons){
        i.classList.remove("hidden")
    }

    //Get auto select
    let autoSeleccionado = document.getElementById("listAutos")
    
    //add class hidden button select auto
    buttonEleccionAuto.classList.add('hidden')

    //return value of function
    return autoSeleccionado
}



//Function to sale Auto
function saleAutoCar(){

    //get value of function "getAuto()" to use in this function
    let valueFunctiongetAuto = getAuto()

    let autoElect = valueFunctiongetAuto.value

    //get id of div whit id "billSaleAuto" to aply class hidden
    let billAuto = document.getElementById('billSaleAuto')
    let containerInputs = document.getElementById('contain')
    let logo = document.getElementById("logo")

    containerInputs.classList.add('hidden')
    logo.classList.add('hidden')
    billAuto.classList.remove('hidden')



    //get id's of contains to write the bill
    let brandModeloCocheTitle = document.getElementById("brandModelCoche")
    let brandCocheText = document.getElementById("brandTexto")
    let modeloCocheText = document.getElementById("modelTexto")
    let colorCocheText = document.getElementById("colorTexto")
    let yearCocheText = document.getElementById("yearTexto")
    let titularCocheTexto = document.getElementById("titularTexto")

    //get id container to add photo
    let photoCoche = document.getElementById("photoCocheBill")

    //get id container of amount
    let amount = document.getElementById("amountAuto")

    //Get id container of date 
    let dateToday = document.getElementById("dateActual")
    let dateInstance = new Date()
    let today = dateInstance.toLocaleDateString("es-ES")

    let vehicle = document.getElementById("unidad")


    //validate the election of user to create the bill 
    for (let i = 0; i < arrayCoches.length; i++) {
        if (arrayCoches[i].name === autoElect) {
            brandModeloCocheTitle.textContent = arrayCoches[i].name
            brandCocheText.textContent = "Marca:    " + arrayCoches[i].brand
            modeloCocheText.textContent = "Modelo:  " + arrayCoches[i].model
            colorCocheText.textContent = "Color:    " + arrayCoches[i].color
            yearCocheText.textContent = "Año:   " + arrayCoches[i].year
            titularCocheTexto.textContent = "Propietario:   " + arrayCoches[i].titular

            photoCoche.setAttribute('src', arrayCoches[i].photo)

            vehicle.textContent = arrayCoches[i].name

            amount.textContent = arrayCoches[i].price + " MXN"

            dateToday.textContent = today
            break;
        }
      }

}
    


function seeAutoCar(){

}

function onAutoCar(){

}