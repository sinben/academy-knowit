var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.employees = [
          
            {"id": 1, "firstName": "Adnan", "lastName": "Jamil", "title":"Senior systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4791869292", "officePhone":"+4791869292", "email":"adnan.jamil@knowit.no"},
 {"id": 2, "firstName": "Aleksander", "lastName": "Grande", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"post@knowit.no"},
 {"id": 3, "firstName": "Alexey", "lastName": "Rytov", "title":"Teamleder", "managerId":42, "city":"Oslo", "cellPhone":"+79219482867", "officePhone":"+79219482867", "email":"alexey.rytov@reaktor.no"},
 {"id": 4, "firstName": "Alf", "lastName": "Kristian Støyle", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4799792226", "officePhone":"+4799792226", "email":"aks@knowit.no"},
 {"id": 5, "firstName": "Alfred", "lastName": "Lysebraate", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4799566544", "officePhone":"+4799566544", "email":"asl@knowit.no"},
 {"id": 6, "firstName": "Amund", "lastName": "Tosterud", "title":"Teamleder", "managerId":42, "city":"Oslo", "cellPhone":"+4795181890", "officePhone":"+4795181890", "email":"amund.tosterud@knowit.no"},
 {"id": 7, "firstName": "Anders", "lastName": "Aarsæther", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4745266223", "officePhone":"+4745266223", "email":"aaa@knowit.no"},
 {"id": 8, "firstName": "Anders", "lastName": "Breivik", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"post@knowit.no"},
 {"id": 9, "firstName": "Anders", "lastName": "Brenna", "title":"Forretningsutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4790077860", "officePhone":"+4790077860", "email":"anders.brenna@knowit.no"},
 {"id": 10, "firstName": "Anders", "lastName": "Brujordet", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"anb@knowit.no"},
 {"id": 11, "firstName": "Andreas", "lastName": "Jacobsen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4741614065", "officePhone":"+4741614065", "email":"aja@knowit.no"},
 {"id": 12, "firstName": "Andreas", "lastName": "Martin Petrov", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4796222997", "officePhone":"+4796222997", "email":"andreas.martin.petrov@knowit.no"},
 {"id": 13, "firstName": "Anna", "lastName": "Aristova", "title":"Konsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4746259277", "officePhone":"+4746259277", "email":"anna.aristova@knowit.no"},
 {"id": 14, "firstName": "Anne", "lastName": "Wike", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4790588197", "officePhone":"+4790588197", "email":"anne.wike@knowit.no"},
 {"id": 15, "firstName": "Anne-Katrine", "lastName": "Wikestad", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"akw@knowit.no"},
 {"id": 16, "firstName": "Arild", "lastName": "Blokkum", "title":"Seniorkonsulent/avd.leder Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4791622880", "officePhone":"+4791622880", "email":"arild.blokkum@knowit.no"},
 {"id": 17, "firstName": "Arne", "lastName": "Bråten", "title":"Seniorkonsulent/avd.leder Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4792094002", "officePhone":"+4792094002", "email":"arne.braten@knowit.no"},
 {"id": 18, "firstName": "Asbjørn", "lastName": "Willersrud", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4797795511", "officePhone":"+4797795511", "email":"awi@knowit.no"},
 {"id": 19, "firstName": "Atle", "lastName": "Riksfjord", "title":"Forretningsutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4790862088", "officePhone":"+4790862088", "email":"atle.riksfjord@knowit.no "},
 {"id": 20, "firstName": "Bjørg", "lastName": "Haaland", "title":"Viseadministrerende direktør Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4791740950", "officePhone":"+4791740950", "email":"bha@knowit.no"},
 {"id": 21, "firstName": "Bjørn", "lastName": "Kvisli", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4747677270", "officePhone":"+4747677270", "email":"bjorn.kvisli@knowit.no"},
 {"id": 22, "firstName": "Bjørn-Vegard", "lastName": "Thoresen", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4748004433", "officePhone":"+4748004433", "email":"bjorn-vegard.thoresen@knowit.no"},
 {"id": 23, "firstName": "Cathrine", "lastName": "Riise Dannevig", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798603931", "officePhone":"+4798603931", "email":"crd@knowit.no"},
 {"id": 24, "firstName": "Cecilie", "lastName": "Fritzvold", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"cef@knowit.no"},
 {"id": 25, "firstName": "Christer", "lastName": "Kjellesvig", "title":"Avdelingsleder", "managerId":42, "city":"Oslo", "cellPhone":"+4795268814", "officePhone":"+4795268814", "email":"ckj@knowit.no"},
 {"id": 26, "firstName": "Christian", "lastName": "Egeberg", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4741315596", "officePhone":"+4741315596", "email":"ceg@knowit.no"},
 {"id": 27, "firstName": "Christin", "lastName": "Lund", "title":"Konsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4748092569", "officePhone":"​+4748092569", "email":"christin.lund@knowit.no"},
 {"id": 28, "firstName": "Efim", "lastName": "Shats", "title":"Senior systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+79112117746", "officePhone":"+79112117746", "email":"efim.shats@reaktor.no"},
 {"id": 29, "firstName": "Einar", "lastName": "Trønningsdal", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4791159168", "officePhone":"+4791159168", "email":"einar.tronningsdal@knowit.no"},
 {"id": 30, "firstName": "Elisabeth", "lastName": "Carson", "title":"Seniorkonsulent/avd.leder Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4746431623", "officePhone":"+4746431623", "email":"elisabeth.carson@knowit.no"},
 {"id": 31, "firstName": "Ellen", "lastName": "Weber", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"lnw@knowit.no"},
 {"id": 32, "firstName": "Erik", "lastName": "Amundrud", "title":"Daglig leder Knowit Objectnet AS", "managerId":42, "city":"Oslo", "cellPhone":"+4790956200", "officePhone":"+4790956200", "email":"ea@knowit.no"},
 {"id": 33, "firstName": "Erik", "lastName": "Meyer", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4792022139", "officePhone":"​+4792022139", "email":"erik.meyer@knowit.no"},
 {"id": 34, "firstName": "Erik", "lastName": "Nikolai Martinsen", "title":"Konsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4747447118", "officePhone":"​+4747447118", "email":"erik.martinsen@knowit.no​"},
 {"id": 35, "firstName": "Erik", "lastName": "Nylund", "title":"Markedsdirektør systemutvikling", "managerId":42, "city":"Oslo", "cellPhone":"+4793492981", "officePhone":"+4793492981", "email":"etn@knowit.no"},
 {"id": 36, "firstName": "Erik", "lastName": "Skaug", "title":"Senior systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4795169573", "officePhone":"+4795169573", "email":"erik.skaug@knowit.no"},
 {"id": 37, "firstName": "Espen", "lastName": "Klæboe", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"esk@knowit.no"},
 {"id": 38, "firstName": "Fabien", "lastName": "Macarie", "title":"Forretningsutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4797955062", "officePhone":"+4797955062", "email":"fabien.macarie@knowit.no"},
 {"id": 39, "firstName": "Fred", "lastName": "Inge Henden", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4792494939", "officePhone":"+4792494939", "email":"fih@knowit.no"},
 {"id": 40, "firstName": "Fredrik", "lastName": "Vraalsen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798462255", "officePhone":"+4798462255", "email":"fvr@knowit.no"},
 {"id": 41, "firstName": "Gayathri", "lastName": "Saravanan", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4746895428", "officePhone":"+4746895428", "email":"gayathri.saravanan@knowit.no"},
 {"id": 42, "firstName": "Gorm", "lastName": "Steine-Eriksen", "title":"Daglig leder Knowit Reaktor Oslo AS", "managerId":42, "city":"Oslo", "cellPhone":"+4792493202", "officePhone":"+4792493202", "email":"gorm.steine-eriksen@knowit.no"},
 {"id": 43, "firstName": "Gunnar", "lastName": "Velle", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4793053583", "officePhone":"+4793053583", "email":"gv@knowit.no"},
 {"id": 44, "firstName": "Gøril", "lastName": "Foss Eriksen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4797586286", "officePhone":"+4797586286", "email":"gfe@knowit.no"},
 {"id": 45, "firstName": "Haakon", "lastName": "Fougner Spilde", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4795789351", "officePhone":"+4795789351", "email":"hfs@knowit.no"},
 {"id": 46, "firstName": "Hanne", "lastName": "Johansen", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4793868459", "officePhone":"+4793868459", "email":"hanne.johansen@knowit.no"},
 {"id": 47, "firstName": "Hans", "lastName": "Christian Brodwall Nielsen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257806", "officePhone":"+4798257806", "email":"hcn@knowit.no"},
 {"id": 48, "firstName": "Hege", "lastName": "Dreiem", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790191284", "officePhone":"+4790191284", "email":"hd@knowit.no"},
 {"id": 49, "firstName": "Heidi", "lastName": "Jacobsen Rognerud", "title":"Konsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4795920127", "officePhone":"+4795920127", "email":"heidijacobsen.rognerud@knowit.no"},
 {"id": 50, "firstName": "Henning", "lastName": "Kærsgaard", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4793007375", "officePhone":"​+4793007375", "email":"henning.kaersgaard@knowit.no"},
 {"id": 51, "firstName": "Henrik", "lastName": "Dæhli", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798837900", "officePhone":"+4798837900", "email":"hed@knowit.no"},
 {"id": 52, "firstName": "Henrik", "lastName": "Otgard", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4793289872", "officePhone":"+4793289872", "email":"heo@knowit.no"},
 {"id": 53, "firstName": "Henrik", "lastName": "Paulsen", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4748012566", "officePhone":"+4748012566", "email":"henrik.paulsen@knowit.no"},
 {"id": 54, "firstName": "Henrik", "lastName": "Rouyer Johnsen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257820", "officePhone":"+4798257820", "email":"hrj@knowit.no"},
 {"id": 55, "firstName": "Hirut", "lastName": "Gebrekidan Damitew", "title":"Konsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4792605954", "officePhone":"​+4792605954", "email":"hirutgebrekidan.damitew@knowit.no"},
 {"id": 56, "firstName": "Hågen", "lastName": "Pihlstrøm Hasle", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790884852", "officePhone":"+4790884852", "email":"hph@knowit.no"},
 {"id": 57, "firstName": "Håvard", "lastName": "Sørensen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4791611160", "officePhone":"+4791611160", "email":"hso@knowit.no"},
 {"id": 58, "firstName": "Inger", "lastName": "Olsen Hande", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4797078635", "officePhone":"​+4797078635", "email":"inger.hande@knowit.no"},
 {"id": 59, "firstName": "Ingve", "lastName": "Vikan Sund", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4793282205", "officePhone":"+4793282205", "email":"Ingvevs@knowit.no"},
 {"id": 60, "firstName": "Irina", "lastName": "Antonova", "title":"Konsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4740048267", "officePhone":"+4740048267", "email":"irina.antonova@knowit.no"},
 {"id": 61, "firstName": "Ivan", "lastName": "Kornienko", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+79219061316", "officePhone":"+79219061316", "email":"ivank@knowit.no"},
 {"id": 62, "firstName": "Jan", "lastName": "Eivind Stillingen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4797077776", "officePhone":"+4797077776", "email":"jes@knowit.no"},
 {"id": 63, "firstName": "Jan", "lastName": "Even Ambjørnrud", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257844", "officePhone":"+4798257844", "email":"jea@knowit.no"},
 {"id": 64, "firstName": "Jan", "lastName": "Henrik Gundelsby", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790181940", "officePhone":"+4790181940", "email":"jhg@knowit.no"},
 {"id": 65, "firstName": "Jan", "lastName": "Petter Hoel", "title":"Teamleder", "managerId":42, "city":"Oslo", "cellPhone":"+4799550165", "officePhone":"+4799550165", "email":"jan.petter.hoel@knowit.no"},
 {"id": 66, "firstName": "Jens", "lastName": "Holm", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790752566", "officePhone":"+4790752566", "email":"jhh@knowit.no"},
 {"id": 67, "firstName": "Joachim", "lastName": "Gard Kalsaas", "title":"Prosjektleder", "managerId":42, "city":"Oslo", "cellPhone":"+4748268585", "officePhone":"+4748268585", "email":"Joachim.gard.kalsaas@knowit.no"},
 {"id": 68, "firstName": "John", "lastName": "William Ditman", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4791884745", "officePhone":"+4791884745", "email":"john.william.ditman@knowit.no"},
 {"id": 69, "firstName": "Jon", "lastName": "Marius Håkedal", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"jmh@knowit.no"},
 {"id": 70, "firstName": "Jon", "lastName": "Vassbø", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"post@knowit.no"},
 {"id": 71, "firstName": "Jonas", "lastName": "Jin Hognes Hansen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798689095", "officePhone":"+4798689095", "email":"jjh@knowit.no"},
 {"id": 72, "firstName": "Karl", "lastName": "Otto Olsen", "title":"Senior systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4797975893", "officePhone":"+4797975893", "email":"karl.otto.olsen@knowit.no"},
 {"id": 73, "firstName": "Karoline", "lastName": "Kristensen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4791634329", "officePhone":"+4791634329", "email":"kkr@knowit.no"},
 {"id": 74, "firstName": "Karstein", "lastName": "Rystad", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4791142338", "officePhone":"+4791142338", "email":"karstein.rystad@knowit.no"},
 {"id": 75, "firstName": "Kenneth", "lastName": "Stigen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4799582287", "officePhone":"+4799582287", "email":"kes@knowit.no"},
 {"id": 76, "firstName": "Kenneth", "lastName": "Strømberg", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4794832630", "officePhone":"​+4794832630", "email":"kenneth.stromberg@knowit.no"},
 {"id": 77, "firstName": "Kjell", "lastName": "Rønningsbakk", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4795103014", "officePhone":"+4795103014", "email":"kro@knowit.no"},
 {"id": 78, "firstName": "Kjetil", "lastName": "Gjelsten", "title":"Kvalitetsentusiast / Partner", "managerId":42, "city":"Oslo", "cellPhone":"+4790122925", "officePhone":"+4790122925", "email":"kjetil.gjelsten@knowit.no"},
 {"id": 79, "firstName": "Knut", "lastName": "Inge Karstensen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"41507080", "officePhone":"41507080", "email":"kik@knowit.no"},
 {"id": 80, "firstName": "Kristian", "lastName": "Melhuus Brandser", "title":"Daglig leder Knowit Quality Management AS", "managerId":42, "city":"Oslo", "cellPhone":"+4797769594", "officePhone":"+4797769594", "email":"kmb@knowit.no"},
 {"id": 81, "firstName": "Kristin", "lastName": "Meyer Kristiansen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257867", "officePhone":"+4798257867", "email":"kmk@knowit.no"},
 {"id": 82, "firstName": "Lars", "lastName": "Ivar Næss", "title":"Avdelingsleder", "managerId":42, "city":"Oslo", "cellPhone":"+4799738635", "officePhone":"+4799738635", "email":"lin@knowit.no"},
 {"id": 83, "firstName": "Lars", "lastName": "Lundby", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257812", "officePhone":"+4798257812", "email":"llu@knowit.no"},
 {"id": 84, "firstName": "Lars", "lastName": "Petter Madsstuen", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4798467000", "officePhone":"​+4798467000", "email":"lars.madsstuen@knowit.no"},
 {"id": 85, "firstName": "Lasse", "lastName": "Tyrihjell", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790942705", "officePhone":"+4790942705", "email":"lty@knowit.no"},
 {"id": 86, "firstName": "Lidiya", "lastName": "Shagalova", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4741045008", "officePhone":"+4741045008", "email":"lidiya.shagalova@knowit.no"},
 {"id": 87, "firstName": "Malin", "lastName": "Elisabeth Lindberg", "title":"UX Designer", "managerId":42, "city":"Oslo", "cellPhone":"+4793635940", "officePhone":"+4793635940", "email":"malin.elisabeth.lindberg@knowit.no"},
 {"id": 88, "firstName": "Marianne", "lastName": "Angel Olsen", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4745473667", "officePhone":"+4745473667", "email":"marianne.angel.olsen@knowit.no"},
 {"id": 89, "firstName": "Marius", "lastName": "Nielsen", "title":"Front-end utvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4792625414", "officePhone":"+4792625414", "email":"marius.nielsen@knowit.no"},
 {"id": 90, "firstName": "Mattis", "lastName": "Thørud", "title":"Salgssjef Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4792033609", "officePhone":"+4792033609", "email":"mattis.thorud@knowit.no"},
 {"id": 91, "firstName": "Merethe", "lastName": "Wold", "title":"Prosjektleder Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4791651171", "officePhone":"​+4791651171", "email":"merethe.wold@knowit.no"},
 {"id": 92, "firstName": "Minh", "lastName": "Nguyen", "title":"Kvalitetsentusiast / Partner", "managerId":42, "city":"Oslo", "cellPhone":"+4798228460", "officePhone":"+4798228460", "email":"minh.nguyen@knowit.no"},
 {"id": 93, "firstName": "Monica", "lastName": "Svanlind", "title":"Prosjektleder", "managerId":42, "city":"Oslo", "cellPhone":"+4798229778", "officePhone":"+4798229778", "email":"monica.svanlind@knowit.no"},
 {"id": 94, "firstName": "Morten", "lastName": "Kaspar Gudmundseth", "title":"Forretningsutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4790673101", "officePhone":"+4790673101", "email":"morten.kaspar.gudmundseth@knowit.no"},
 {"id": 95, "firstName": "Naeem", "lastName": "Haris", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4794113137", "officePhone":"+4794113137", "email":"naeem.haris@knowit.no"},
 {"id": 96, "firstName": "Nils", "lastName": "Hermann Wiggen", "title":"Konsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4797790141", "officePhone":"+4797790141", "email":"nilshermann.wiggen@knowit.no"},
 {"id": 97, "firstName": "Oddmund", "lastName": "Strømme", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4741687447", "officePhone":"+4741687447", "email":"oddmund.stromme@knowit.no"},
 {"id": 98, "firstName": "Olav", "lastName": "Høgberg", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790123667", "officePhone":"+4790123667", "email":"olh@knowit.no"},
 {"id": 99, "firstName": "Per", "lastName": "Reidar Ulrikson", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"​+4799243327", "officePhone":"​+4799243327", "email":"per.ulrikson@knowit.no"},
 {"id": 100, "firstName": "Peter", "lastName": "Tollnes Flem", "title":"Nordisk Trainee", "managerId":42, "city":"Oslo", "cellPhone":"+4795007613", "officePhone":"+4795007613", "email":"peter.tollnes.flem@knowit.no"},
 {"id": 101, "firstName": "Pierre-Emmanuel", "lastName": "Racine", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4746678065", "officePhone":"+4746678065", "email":"pierre@knowit.no"},
 {"id": 102, "firstName": "Raymond", "lastName": "Koteng", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790871996", "officePhone":"+4790871996", "email":"rak@knowit.no"},
 {"id": 103, "firstName": "Richard", "lastName": "Park Sneesby", "title":"UX Designer", "managerId":42, "city":"Oslo", "cellPhone":"+4748106248", "officePhone":"+4748106248", "email":"richard.sneesby@knowit.no"},
 {"id": 104, "firstName": "Rita", "lastName": "Sivertsen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4799232718", "officePhone":"+4799232718", "email":"rsi@knowit.no"},
 {"id": 105, "firstName": "Robin", "lastName": "Skoglund", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790123667", "officePhone":"+4790123667", "email":"rsk@knowit.no"},
 {"id": 106, "firstName": "Roger", "lastName": "Kind Kristiansen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4791788471", "officePhone":"+4791788471", "email":"rkk@knowit.no"},
 {"id": 107, "firstName": "Roger", "lastName": "Nesheim", "title":"Nordisk Trainee", "managerId":42, "city":"Oslo", "cellPhone":"+4741636086", "officePhone":"+4741636086", "email":"roger.nesheim@knowit.no"},
 {"id": 108, "firstName": "Rolf", "lastName": "H. Knutsen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4745249376", "officePhone":"+4745249376", "email":"rhk@knowit.no"},
 {"id": 109, "firstName": "Roy", "lastName": "Paulsen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4791339961", "officePhone":"+4791339961", "email":"rp@knowit.no"},
 {"id": 110, "firstName": "Rune", "lastName": "Horneland", "title":"Teamleder", "managerId":42, "city":"Oslo", "cellPhone":"+4799107868", "officePhone":"+4799107868", "email":"rune.horneland@knowit.no"},
 {"id": 111, "firstName": "Rune", "lastName": "Melhus", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"rme@knowit.no"},
 {"id": 112, "firstName": "Rune", "lastName": "Myrdal", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790549353", "officePhone":"+4790549353", "email":"rmy@knowit.no"},
 {"id": 113, "firstName": "Rune", "lastName": "Storløpa", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257982", "officePhone":"+4798257982", "email":"rst@knowit.no"},
 {"id": 114, "firstName": "Sandra", "lastName": "Leandersson", "title":"Konsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4745500678", "officePhone":"+4745500678", "email":"sandra.leandersson@knowit.no"},
 {"id": 115, "firstName": "Sergey", "lastName": "Sudakov", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+79030994849", "officePhone":"+79030994849", "email":"Sergey.Sudakov@knowit.no"},
 {"id": 116, "firstName": "Sigmund", "lastName": "Marius Nilssen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"smn@knowit.no"},
 {"id": 117, "firstName": "Sigurd", "lastName": "Lislegaard", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4790614342", "officePhone":"+4790614342", "email":"sigurd.lislegaard@knowit.no"},
 {"id": 118, "firstName": "Siri", "lastName": "Bergmann Stølen", "title":"UX Designer", "managerId":42, "city":"Oslo", "cellPhone":"+4747339332", "officePhone":"+4747339332", "email":"siribs@knowit.no"},
 {"id": 119, "firstName": "Songying", "lastName": "Lu", "title":"Interaksjonsdesigner", "managerId":42, "city":"Oslo", "cellPhone":"+4741609228", "officePhone":"+4741609228", "email":"songying.lu@knowit.no"},
 {"id": 120, "firstName": "Steinar", "lastName": "Hanssen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257819", "officePhone":"+4798257819", "email":"sbh@knowit.no"},
 {"id": 121, "firstName": "Stig", "lastName": "Roar Bolkan", "title":"Senior rådgiver Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4791755268", "officePhone":"+4791755268", "email":"stigroar.bolkan@knowit.no"},
 {"id": 122, "firstName": "Stina", "lastName": "Turkerud Bjørge", "title":"Interaksjonsdesigner", "managerId":42, "city":"Oslo", "cellPhone":"+4790962338", "officePhone":"+4790962338", "email":"stinart@knowit.no "},
 {"id": 123, "firstName": "Svein", "lastName": "Erik Vrålstad", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4748070554", "officePhone":"+4748070554", "email":"sveinerik.vralstad@knowit.no"},
 {"id": 124, "firstName": "Sverre", "lastName": "Tinnen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4790956500", "officePhone":"+4790956500", "email":"st@knowit.no"},
 {"id": 125, "firstName": "Svetlana", "lastName": "Gurskaya", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+79052196720", "officePhone":"+79052196720", "email":"svetlana.gurskaya@knowit.no"},
 {"id": 126, "firstName": "Tanja", "lastName": "Gruschke", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"tmg@knowit.no"},
 {"id": 127, "firstName": "Thorbjørn", "lastName": " Fritzøe Nielsen", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4748486668", "officePhone":"+4748486668", "email":"thorbjorn.nielsen@knowit.no"},
 {"id": 128, "firstName": "Tobias", "lastName": "Lund-Melcher", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4741434496", "officePhone":"+4741434496", "email":"tlm@knowit.no"},
 {"id": 129, "firstName": "Tobias", "lastName": "Torrissen", "title":"Uspesifiert", "managerId":42, "city":"Oslo", "cellPhone":"+4798257822", "officePhone":"+4798257822", "email":"tto@knowit.no"},
 {"id": 130, "firstName": "Tor", "lastName": "Johannessen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257823", "officePhone":"+4798257823", "email":"tjo@knowit.no"},
 {"id": 131, "firstName": "Tore", "lastName": "Hatletveit", "title":"Seniorkonsulent Beslutningsstøtte", "managerId":42, "city":"Oslo", "cellPhone":"+4791601130", "officePhone":"+4791601130", "email":"tore.hatletveit@knowit.no"},
 {"id": 132, "firstName": "Tore", "lastName": "Kaasen", "title":"Administrerende direktør Knowit Decision Oslo AS", "managerId":42, "city":"Oslo", "cellPhone":"+4790725648", "officePhone":"+4790725648", "email":"tore.kaasen@knowit.no"},
 {"id": 133, "firstName": "Trond", "lastName": "Øksendal", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"02486", "officePhone":"02486", "email":"tok@knowit.no"},
 {"id": 134, "firstName": "Trygve", "lastName": "Fridstrøm", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4791740952", "officePhone":"+4791740952", "email":"tfr@knowit.no"},
 {"id": 135, "firstName": "Vidar", "lastName": "Johansen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4793620581", "officePhone":"+4793620581", "email":"vij@knowit.no"},
 {"id": 136, "firstName": "Yasir", "lastName": "Butt", "title":"Systemutvikler", "managerId":42, "city":"Oslo", "cellPhone":"+4798416973", "officePhone":"+4798416973", "email":"yasir.butt@knowit.no"},
 {"id": 137, "firstName": "Øystein", "lastName": "Haga", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4798257881", "officePhone":"+4798257881", "email":"oha@knowit.no"},
 {"id": 138, "firstName": "Øystein", "lastName": "Kjærnet", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4740496803", "officePhone":"+4740496803", "email":"okj@knowit.no"},
 {"id": 139, "firstName": "Øyvind", "lastName": "Ingebrigtsen Øvergaard", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4745665668", "officePhone":"+4745665668", "email":"oio@knowit.no"},
 {"id": 140, "firstName": "Øyvind", "lastName": "Martinsen", "title":"Knowit Objectnet", "managerId":42, "city":"Oslo", "cellPhone":"+4797061833", "officePhone":"+4797061833", "email":"oma@knowit.no"},


           
        ];

    callLater(successCallback);

}