document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); // Disable the default action when Ctrl is pressed
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault(); // Disable F12 (DevTools shortcut)
    }
});



function loginUser() {
    // Simulated user data (replace with real authentication)
    const users = {

        // Lily
        "L01": { password: "0243760205", homepage: "pages/Lily/L01.html" },
        "L02": { password: "0246387638", homepage: "pages/Lily/L02.html" },
        "L03": { password: "0257136891", homepage: "pages/Lily/L03.html" },
        "L04": { password: "", homepage: "pages/Lily/L04.html" },
        "L05": { password: "0558850857", homepage: "pages/Lily/L05.html" },
        "L06": { password: "0558850857", homepage: "pages/Lily/L06.html" },
        "L07": { password: "0246849824", homepage: "pages/Lily/L07.html" },
        "L08": { password: "0257251006", homepage: "pages/Lily/L08.html" },
        "L09": { password: "0249797540", homepage: "pages/Lily/L09.html" },

        // Little Daisy
        "LD01": { password: "0592028692", homepage: "pages/Little-Daisy/LD01.html" },
        "LD02": { password: "0535828974", homepage: "pages/Little-Daisy/LD02.html" },
        "LD03": { password: "0591588144", homepage: "pages/Little-Daisy/LD03.html" },
        "LD04": { password: "0545124034", homepage: "pages/Little-Daisy/LD04.html" },
        "LD05": { password: "0242770399", homepage: "pages/Little-Daisy/LD05.html" },
        "LD06": { password: "0534795556", homepage: "pages/Little-Daisy/LD06.html" },

        // Rose 
        "R01": { password: "0242580593", homepage: "pages/Rose/R01.html" },
        "R02": { password: "0532717130", homepage: "pages/Rose/R02.html" },
        "R03": { password: "0246796827", homepage: "pages/Rose/R03.html" },
        "R04": { password: "0542838878", homepage: "pages/Rose/R04.html" },
        "R05": { password: "0553399612", homepage: "pages/Rose/R05.html" },
        "R06": { password: "", homepage: "pages/Rose/R06.html" },
        "R07": { password: "0548725933", homepage: "pages/Rose/R07.html" },
        "R08": { password: "0246949804", homepage: "pages/Rose/R08.html" },
        "R09": { password: "0249667129", homepage: "pages/Rose/R09.html" },
        "R10": { password: "0549329144", homepage: "pages/Rose/R10.html" },
        "R11": { password: "0257537111", homepage: "pages/Rose/R11.html" },
        "R12": { password: "0533225086", homepage: "pages/Rose/R12.html" },
        "R13": { password: "0533225086", homepage: "pages/Rose/R13.html" },
        "R14": { password: "0243921534", homepage: "pages/Rose/R14.html" },
        "R15": { password: "0246922027", homepage: "pages/Rose/R15.html" },
        "R16": { password: "0534795556", homepage: "pages/Rose/R16.html" },
        "R17": { password: "0243564438", homepage: "pages/Rose/R17.html" },
        "R18": { password: "0247631058", homepage: "pages/Rose/R18.html" },
        "R19": { password: "0532894665", homepage: "pages/Rose/R19.html" },
        "R20": { password: "0553787819", homepage: "pages/Rose/R20.html" },        
        "R21": { password: "0552050193", homepage: "pages/Rose/R21.html" },        


        // Sunflower
        "S01": { password: "0244580876", homepage: "pages/Sunflower/S01.html" },
        "S02": { password: "0555640246", homepage: "pages/Sunflower/S02.html" },
        "S03": { password: "0244195200", homepage: "pages/Sunflower/S03.html" },
        "S04": { password: "0246796827", homepage: "pages/Sunflower/S04.html" },
        "S05": { password: "0244456873", homepage: "pages/Sunflower/S05.html" },
        "S06": { password: "0246789885", homepage: "pages/Sunflower/S06.html" },
        "S07": { password: "0554361947", homepage: "pages/Sunflower/S07.html" },
        "S08": { password: "0540944609", homepage: "pages/Sunflower/S08.html" },
        "S09": { password: "0540944609", homepage: "pages/Sunflower/S09.html" },
        "S10": { password: "0551899546", homepage: "pages/Sunflower/S10.html" },
        "S11": { password: "0545179632", homepage: "pages/Sunflower/S11.html" },
        "S12": { password: "0244243451", homepage: "pages/Sunflower/S12.html" },
        "S13": { password: "0244909163", homepage: "pages/Sunflower/S13.html" },
        "S14": { password: "0597630401", homepage: "pages/Sunflower/S14.html" },
        "S15": { password: "0530948103", homepage: "pages/Sunflower/S15.html" },
        "S16": { password: "0535588382", homepage: "pages/Sunflower/S16.html" },
        "S17": { password: "0597126885", homepage: "pages/Sunflower/S17.html" },
        "S18": { password: "0277225237", homepage: "pages/Sunflower/S18.html" },
        "S19": { password: "0554353395", homepage: "pages/Sunflower/S19.html" },
        "S20": { password: "0240807009", homepage: "pages/Sunflower/S20.html" },
        "S21": { password: "0555379868", homepage: "pages/Sunflower/S21.html" },
        "S22": { password: "0552200426", homepage: "pages/Sunflower/S22.html" },
        "S23": { password: "0541980469", homepage: "pages/Sunflower/S23.html" },
        "S24": { password: "0548954438", homepage: "pages/Sunflower/S24.html" },
        "S25": { password: "0540944609", homepage: "pages/Sunflower/S25.html" },
        // Complete 


        // Tulip
        "T01": { password: "0242580593", homepage: "pages/Tulip/T01.html" },
        "T02": { password: "0593531020", homepage: "pages/Tulip/T02.html" },
        "T03": { password: "0248180961", homepage: "pages/Tulip/T03.html" },
        "T04": { password: "0533225086", homepage: "pages/Tulip/T04.html" },
        "T05": { password: "0549329144", homepage: "pages/Tulip/T05.html" },
        "T06": { password: "0558583897", homepage: "pages/Tulip/T06.html" },
        "T07": { password: "0552050193", homepage: "pages/Tulip/T07.html" },
        "T08": { password: "0531442644", homepage: "pages/Tulip/T08.html" },
        "T09": { password: "0553787819", homepage: "pages/Tulip/T09.html" },
        "T10": { password: "0546897380", homepage: "pages/Tulip/T10.html" },
        "T11": { password: "0242770309", homepage: "pages/Tulip/T11.html" },
        "T12": { password: "0244878582", homepage: "pages/Tulip/T12.html" },
        "T13": { password: "0597007496", homepage: "pages/Tulip/T13.html" },
        "T14": { password: "0246973816", homepage: "pages/Tulip/T14.html" },
        "T15": { password: "0597043020", homepage: "pages/Tulip/T15.html" },
        "T16": { password: "0544762108", homepage: "pages/Tulip/T16.html" },
        "T17": { password: "0532542217", homepage: "pages/Tulip/T17.html" },
        "T18": { password: "0530046460", homepage: "pages/Tulip/T18.html" },
        "T19": { password: "0537424599", homepage: "pages/Tulip/T19.html" },
        "T20": { password: "0242042455", homepage: "pages/Tulip/T20.html" },
        "T21": { password: "0592000937", homepage: "pages/Tulip/T21.html" },
        "T22": { password: "0248421948", homepage: "pages/Tulip/T22.html" },
        "T23": { password: "0554227373", homepage: "pages/Tulip/T23.html" },
        "T24": { password: "0548954438", homepage: "pages/Tulip/T24.html" },
        "T25": { password: "0246922027", homepage: "pages/Tulip/T25.html" },
        "T26": { password: "0249287248", homepage: "pages/Tulip/T26.html" },
        "T27": { password: "0246949804", homepage: "pages/Tulip/T27.html" },
        // Complete

        // Cactus 
        "0101": { password: "0244579145", homepage: "pages/Cactus/0101.html" },
        "0102": { password: "0243350736", homepage: "pages/Cactus/0102.html" },
        "0103": { password: "0543562486", homepage: "pages/Cactus/0103.html" },
        "0104": { password: "0559315192", homepage: "pages/Cactus/0104.html" },
        "0105": { password: "0240646041", homepage: "pages/Cactus/0105.html" },
        "0106": { password: "0543467521", homepage: "pages/Cactus/0106.html" },
        "0107": { password: "0543543601", homepage: "pages/Cactus/0107.html" },
        "0108": { password: "0243921534", homepage: "pages/Cactus/0108.html" },
        "0109": { password: "0242770399", homepage: "pages/Cactus/0109.html" },
        "0110": { password: "0554227373", homepage: "pages/Cactus/0110.html" },
        "0111": { password: "0249369599", homepage: "pages/Cactus/0111.html" },
        "0112": { password: "0246849824", homepage: "pages/Cactus/0112.html" },
        "0113": { password: "0247336610", homepage: "pages/Cactus/0113.html" },
        "0114": { password: "0242828938", homepage: "pages/Cactus/0114.html" },
        "0115": { password: "0548423130", homepage: "pages/Cactus/0115.html" },
        "0116": { password: "0241415750", homepage: "pages/Cactus/0116.html" },
        "0117": { password: "0249067129", homepage: "pages/Cactus/0117.html" },
        "0118": { password: "0244408475", homepage: "pages/Cactus/0118.html" },
        "0119": { password: "0549482502", homepage: "pages/Cactus/0119.html" },
        "0120": { password: "0533361751", homepage: "pages/Cactus/0120.html" },
        "0121": { password: "0241772176", homepage: "pages/Cactus/0121.html" },
        "0122": { password: "0244594626", homepage: "pages/Cactus/0122.html" },
        "0123": { password: "0244317568", homepage: "pages/Cactus/0123.html" },
        "0124": { password: "0553399612", homepage: "pages/Cactus/0124.html" },
        "0125": { password: "0246922027", homepage: "pages/Cactus/0125.html" },
        // Complete 

        // Marigold
        "0201": { password: "0242744036", homepage: "pages/Marigold/0201.html" },
        "0202": { password: "0546897380", homepage: "pages/Marigold/0202.html" },
        "0203": { password: "0559016877", homepage: "pages/Marigold/0203.html" },
        "0204": { password: "0244878582", homepage: "pages/Marigold/0204.html" },
        "0205": { password: "0244906854", homepage: "pages/Marigold/0205.html" },
        "0206": { password: "0242580593", homepage: "pages/Marigold/0206.html" },
        "0207": { password: "0242559295", homepage: "pages/Marigold/0207.html" },
        "0208": { password: "0242676182", homepage: "pages/Marigold/0208.html" },
        "0209": { password: "0249771485", homepage: "pages/Marigold/0209.html" },
        "0210": { password: "0599020869", homepage: "pages/Marigold/0210.html" },
        "0211": { password: "0244669051", homepage: "pages/Marigold/0211.html" },
        "0212": { password: "0540887547", homepage: "pages/Marigold/0212.html" },
        "0213": { password: "0249795269", homepage: "pages/Marigold/0213.html" },
        "0214": { password: "0599457910", homepage: "pages/Marigold/0214.html" },
        "0215": { password: "0599457910", homepage: "pages/Marigold/0215.html" },
        "0216": { password: "0536260163", homepage: "pages/Marigold/0216.html" },
        "0217": { password: "0243567731", homepage: "pages/Marigold/0217.html" },
        "0218": { password: "0553787819", homepage: "pages/Marigold/0218.html" },
        "0219": { password: "0246973816", homepage: "pages/Marigold/0219.html" },
        "0220": { password: "0550627514", homepage: "pages/Marigold/0220.html" },
        "0221": { password: "0242647485", homepage: "pages/Marigold/0221.html" },
        "0222": { password: "0531442644", homepage: "pages/Marigold/0222.html" },
        "0223": { password: "0536299182", homepage: "pages/Marigold/0223.html" },
        "0224": { password: "0540860372", homepage: "pages/Marigold/0224.html" },
        "0225": { password: "0256876950", homepage: "pages/Marigold/0225.html" },
        "0226": { password: "0242150146", homepage: "pages/Marigold/0226.html" },
        "0227": { password: "", homepage: "pages/Marigold/0227.html" },
        // Complete 

        // Rosemary
        "0301": { password: "0246849824", homepage: "pages/Rosemary/0301.html" },
        "0302": { password: "0241586784", homepage: "pages/Rosemary/0302.html" },
        "0303": { password: "0549482502", homepage: "pages/Rosemary/0303.html" },
        "0304": { password: "0548352022", homepage: "pages/Rosemary/0304.html" },
        "0305": { password: "0257102038", homepage: "pages/Rosemary/0305.html" },
        "0306": { password: "0244594626", homepage: "pages/Rosemary/0306.html" },
        "0307": { password: "0245777922", homepage: "pages/Rosemary/0307.html" },
        "0308": { password: "0542838878", homepage: "pages/Rosemary/0308.html" },
        "0309": { password: "0245199089", homepage: "pages/Rosemary/0309.html" },
        "0310": { password: "0553399612", homepage: "pages/Rosemary/0310.html" },
        "0311": { password: "0243921534", homepage: "pages/Rosemary/0311.html" },
        "0312": { password: "0243657307", homepage: "pages/Rosemary/0312.html" },
        "0313": { password: "0242870690", homepage: "pages/Rosemary/0313.html" },
        "0314": { password: "0549329144", homepage: "pages/Rosemary/0314.html" },
        "0315": { password: "0549329144", homepage: "pages/Rosemary/0315.html" },
        "0316": { password: "0244372748", homepage: "pages/Rosemary/0316.html" },
        "0317": { password: "0277225237", homepage: "pages/Rosemary/0317.html" },
        "0318": { password: "0599457910", homepage: "pages/Rosemary/0318.html" },
        "0319": { password: "0244317586", homepage: "pages/Rosemary/0319.html" },
        "0320": { password: "0553787819", homepage: "pages/Rosemary/0320.html" },
        "0321": { password: "0549224142", homepage: "pages/Rosemary/0321.html" },
        "0322": { password: "0246693511", homepage: "pages/Rosemary/0322.html" },
        "0323": { password: "0248421948", homepage: "pages/Rosemary/0323.html" },
        "0324": { password: "0243817570", homepage: "pages/Rosemary/0324.html" },
        "0325": { password: "0244874198", homepage: "pages/Rosemary/0325.html" },
        // Complete 
        
                    
        // Daffodils
        "0401": { password: "0553510085", homepage: "pages/Daffodils/0401.html" },
        "0402": { password: "0549224142", homepage: "pages/Daffodils/0402.html" },
        "0403": { password: "0532810127", homepage: "pages/Daffodils/0403.html" },
        "0404": { password: "0548205225", homepage: "pages/Daffodils/0404.html" },
        "0405": { password: "0533225086", homepage: "pages/Daffodils/0405.html" },
        "0406": { password: "0247464852", homepage: "pages/Daffodils/0406.html" },
        "0407": { password: "0540944609", homepage: "pages/Daffodils/0407.html" },
        "0408": { password: "0242302162", homepage: "pages/Daffodils/0408.html" },
        "0409": { password: "0244372748", homepage: "pages/Daffodils/0409.html" },
        "0410": { password: "0548954438", homepage: "pages/Daffodils/0410.html" },
        "0411": { password: "0550448079", homepage: "pages/Daffodils/0411.html" },
        "0412": { password: "0558712715", homepage: "pages/Daffodils/0412.html" },
        "0413": { password: "0543234803", homepage: "pages/Daffodils/0413.html" },
        "0414": { password: "0549329144", homepage: "pages/Daffodils/0414.html" },
        "0415": { password: "0245113762", homepage: "pages/Daffodils/0415.html" },
        "0416": { password: "0240708472", homepage: "pages/Daffodils/0416.html" },
        "0417": { password: "0243654265", homepage: "pages/Daffodils/0417.html" },
        "0418": { password: "", homepage: "pages/Daffodils/0418.html" },
        "0419": { password: "0543108626", homepage: "pages/Daffodils/0419.html" },
        "0420": { password: "0597007496", homepage: "pages/Daffodils/0420.html" },
        "0421": { password: "", homepage: "pages/Daffodils/0421.html" },
        "0422": { password: "", homepage: "pages/Daffodils/0422.html" },
        "0423": { password: "0552050193", homepage: "pages/Daffodils/0423.html" },
        "0424": { password: "0599083030", homepage: "pages/Daffodils/0424.html" },
        // Complete 



        // Jasmine
        "0501": { password: "0245036129", homepage: "pages/Jasmine/0501.html" },
        "0502": { password: "0242549003", homepage: "pages/Jasmine/0502.html" },
        "0503": { password: "0546133718", homepage: "pages/Jasmine/0503.html" },
        "0504": { password: "0244195200", homepage: "pages/Jasmine/0504.html" },
        "0505": { password: "0551655891", homepage: "pages/Jasmine/0505.html" },
        "0506": { password: "0244448114", homepage: "pages/Jasmine/0506.html" },
        "0507": { password: "0531442644", homepage: "pages/Jasmine/0507.html" },
        "0508": { password: "0599678668", homepage: "pages/Jasmine/0508.html" },
        "0509": { password: "0542838878", homepage: "pages/Jasmine/0509.html" },
        "0510": { password: "0597126885", homepage: "pages/Jasmine/0510.html" },
        "0511": { password: "0597007496", homepage: "pages/Jasmine/0511.html" },
        "0512": { password: "0554353349", homepage: "pages/Jasmine/0512.html" },
        "0513": { password: "0599083030", homepage: "pages/Jasmine/0513.html" },
        "0514": { password: "0241415750", homepage: "pages/Jasmine/0514.html" },
        "0515": { password: "0241261746", homepage: "pages/Jasmine/0515.html" },
        "0516": { password: "0558583897", homepage: "pages/Jasmine/0516.html" },
        "0517": { password: "0249771485", homepage: "pages/Jasmine/0517.html" },
        "0518": { password: "0543467521", homepage: "pages/Jasmine/0518.html" },
        "0519": { password: "0242770399", homepage: "pages/Jasmine/0519.html" },
        "0520": { password: "0548205225", homepage: "pages/Jasmine/0520.html" },
        "0521": { password: "0277225237", homepage: "pages/Jasmine/0521.html" },
        // Complete 


        // Carnation
        "0601": { password: "0553645909", homepage: "pages/Carnation/0601.html" },
        "0602": { password: "0246387638", homepage: "pages/Carnation/0602.html" },
        "0603": { password: "", homepage: "pages/Carnation/0603.html" },
        "0604": { password: "0277198840", homepage: "pages/Carnation/0604.html" },
        "0605": { password: "0544762108", homepage: "pages/Carnation/0605.html" },
        "0606": { password: "0558058948", homepage: "pages/Carnation/0606.html" },
        "0607": { password: "0240118767", homepage: "pages/Carnation/0607.html" },
        "0608": { password: "0548423130", homepage: "pages/Carnation/0608.html" },
        "0609": { password: "0244317568", homepage: "pages/Carnation/0609.html" },
        "0610": { password: "0591588271", homepage: "pages/Carnation/0610.html" },
        "0611": { password: "0545118686", homepage: "pages/Carnation/0611.html" },
        "0612": { password: "0243350736", homepage: "pages/Carnation/0612.html" },
        "0613": { password: "0242559295", homepage: "pages/Carnation/0613.html" },
        // Complete 

        // Morning Glory
        "0701": { password: "0534307043", homepage: "pages/Morning_Glory/0701.html" },
        "0702": { password: "0241415750", homepage: "pages/Morning_Glory/0702.html" },
        "0703": { password: "0277698080", homepage: "pages/Morning_Glory/0703.html" },
        "0704": { password: "0243657307", homepage: "pages/Morning_Glory/0704.html" },
        "0705": { password: "0243906000", homepage: "pages/Morning_Glory/0705.html" },
        "0706": { password: "0242580593", homepage: "pages/Morning_Glory/0706.html" },
        "0707": { password: "0244878582", homepage: "pages/Morning_Glory/0707.html" },
        // Complete

        // Camellia
        "0801": { password: "0244448114", homepage: "pages/Camellia/0801.html" },
        "0802": { password: "0535800440", homepage: "pages/Camellia/0802.html" },
        "0803": { password: "0543108626", homepage: "pages/Camellia/0803.html" },
        "0804": { password: "0531442644", homepage: "pages/Camellia/0804.html" },
        // Complete 
        


        "admin": { password: "1234", homepage: "pages/admin.html" },
        "userC": { password: "passC", homepage: "homepageC.html" },
        "Dave": { password: "1234", homepage: "pages/CLASS 2 MARIGOLD.html" }
    };

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        // Store user info (not secure, for simple cases only)
        localStorage.setItem("loggedInUser", username);
        
        // Redirect to the appropriate homepage
        window.location.href = users[username].homepage;
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password");
        return false;
    }
}
