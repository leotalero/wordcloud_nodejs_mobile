var db=require("./db");
var data=require("./models/data");



function getRandomHobbies(){
    var aux = [];
    
    for(var i = 0; i < 5; i++){
        aux.push(hobbies[Math.floor(Math.random()*hobbies.length)]);
    }
    
    return aux;
}


function makeCalls(){
    
    var staff, name, category;
    for(var i = 0; i < users.length; i++){
        staff = users[i][0];
        
        
        
        data.insert(staff, getRandomHobbies(), function(err, data){
            if(err){
                console.log("error inserting the data", staff, err);
            }
        })
    }
    
    console.log(staff, name, category);
    
    process.exit(0);
}




var users = [
    ["36441","Ada Yazmin Quijano Alcantara","People"],
["34972","Adriana Perez Martinez","Management"],
["18552","Pedro Alberto Jaquez Garces","Market"],
["10007","Alberto Kuri Monterrubio","Offering"],
["30389","Ale Jaime Fayad Gomez Palacio","Delivery"],
["25298","Alejandra Campos Castrejon","People"],
["23705","Lourdes Alejandra Garcia Ceballos","Management"],
["26663","Maria Alejandra Pliego Zermeno","Market"],
["24758","Alejandro Fernandez Orihuela","Offering"],
["26791","Alejandro Jimenez Mora","Delivery"],
["34549","Alejandro Maga_a Heredia","People"],
["26507","Alejandro Ortiz Medina","Management"],
["37195","Alejandro Salda_a Gamio","Market"],
["30757","Alejandro Zepeda Saenz","Offering"],
["23996","Alfonso Antonio Llorens Rojas","Delivery"],
["21779","Alfonso Moyo Espinoza","People"],
["13740","Alfredo Hernandez Martinez","Management"],
["25379","Alfredo Reynoso Pliego","Market"],
["33973","Aline Soledad Vargas Alcantara","Offering"],
["26301","Alvaro Diaz Cabeza","Delivery"],
["24487","Amanda Marisol Trejo Sepulveda","People"],
["34540","Paris Amauri Gil Rodriguez","Management"],
["23804","Ana Guadalupe Bernal Yubi","Market"],
["25957","Ana Jahel Cabrera Hernandez","Offering"],
["32423","Ana Isabel Hernandez Tapia","Delivery"],
["36271","Ana Karen Martinez Morales","People"],
["23852","Ana Paulina Hernandez Bolaos","Management"],
["36127","Ana Cristina Perez Felice","Market"],
["26693","Anabel Sanabria Parra","Offering"],
["21877","Anallely Martinez Cortes","Delivery"],
["14281","Angel Manuel Ibarra Rubio","People"],
["22372","Angelica Cedillo Juarez","Management"],
["24867","Anthony Nader Khoury","Market"],
["24605","Jose Antonio Correa Ibargengoitia","Offering"],
["26210","Jose Antonio Cortes Martinez","Delivery"],
["26105","Antonio Escobedo Escalona","People"],
["13758","Antonio Hernandez Moran","Management"],
["14778","Antonio De Jesus Martinez Garcia","Market"],
["22551","Antonio Ortega Hernandez","Offering"],
["15736","Armando Uru_uela Escobar","Delivery"],
["34875","Arturo Nivon Medrano","People"],
["24725","Aurora Castillo Mendiola","Management"],
["25798","Beatriz Adriana Juarez Mendez","Market"],
["30393","Bego_a Carabias Yarto","Offering"],
["32604","Stephanie Belinda Flores Lopez","Delivery"],
["36075","Maria Berenice Aguilar Guzman","People"],
["36919","Briseida Estefania Valladares Hernandez","Management"],
["15631","Bryan Michael Bloom","Market"],
["17301","Carlos Antonio Silva Sanchez","Offering"],
["14911","Carlos Enrique Almanza Aguilar","Delivery"],
["23810","Carlos Escobedo Martinez","People"],
["35347","Jose Carlos Marron Galindo","Management"],
["22490","Carlos Antonio Mu_oz Castro","Market"],
["36033","Carlos Francisco Ponce De Leon Rivera","Offering"],
["35889","Carlos Manuel Rojas Contreras","Delivery"],
["26544","Cecilia Arlete Bravo Garza","People"],
["22887","Cesar Alonso Justo Cervantes","Management"],
["33040","Cesar Monroy Nava","Market"],
["36128","Christian Gabriel Miranda Ruiz","Offering"],
["24711","Christian Ubaldo Montoya Gutierrez","Delivery"],
["35893","Christian Miguel Oviedo Aguilar","People"],
["23628","Claudia Gonzalez Santos","Management"],
["20657","Claudia Margarita Jara Toledo","Market"],
["34974","Claudia Zamora Ramirez","Offering"],
["32057","Daniel Martinez Arevalo","Delivery"],
["34643","Daniel Fernando Diaz Diaz","People"],
["25790","Daniel Maudet Suarez","Management"],
["37143","Daniel Rivas Dow","Market"],
["33233","Daniel Toral Duarte","Offering"],
["25363","Daniel Valle Barrera","Delivery"],
["38633","Daniela Mendieta Cervantes","People"],
["37468","David Fernandez Gallegos","Management"],
["21872","Sergio David Gutierrez Gomez","Market"],
["24488","David Nava Olivares","Offering"],
["23627","De Etta Adriana Sanchez Orozco","Delivery"],
["25885","Diana Alferez Esperon","People"],
["33711","Diana Trejo Cruz","Management"],
["26275","Diana Lucila Velarde Torres","Market"],
["16200","Diego Francisco Carreto Sanchez","Offering"],
["26260","Diego Alejandro Garcia Osorio","Delivery"],
["16472","Dora Angelica Palafox Perez","People"],
["13204","Doreli Chavez Mancilla","Management"],
["33269","Dubravka Ilic","Market"],
["26648","Eduard Flaquer Carreras_Candi","Offering"],
["33191","Eduardo Avilez Vazquez","Delivery"],
["26066","Eduardo Gerardo Reyes Bravo","People"],
["25096","Elsa Morales Aguirre","Management"],
["30942","Enrique Alejandro Alvarez De Cienfuegos Ayora","Market"],
["34187","Enrique Bardasano Arizti","Offering"],
["35134","Erick Villafan Baca","Delivery"],
["14005","Erika Cardoso Ocampo","People"],
["34573","Erika Isabel Martinez Velasco","Management"],
["35019","Erika Niessen Ramirez","Market"],
["23483","Jesus Ernesto Cruz Rojas","Offering"],
["23654","Jose Ernesto Monroy Ibarra","Delivery"],
["39503","Laura Esmeralda Reyes Gonzalez","People"],
["10223","Esteban Jose Gonzalez Martinez","Management"],
["23606","Evelyn Aguirre Chazaro","Market"],
["23511","Fabian Armando Rovelo Gutierrez","Offering"],
["36268","Fatima Jocelyn Rodriguez Garcia","Delivery"],
["35948","Luis Felipe Gonzalez Hernandez","People"],
["33273","Felix Eduardo Bueno Pascual","Management"],
["38874","Juan Fermin Gonzalez Garcia","Market"],
["35014","Maria Fernanda Nu_ez Mu_iz","Offering"],
["34089","Maria Fernanda Zumpano Romero","Delivery"],
["37193","Fernando Hiram Chavez Moreno","People"],
["13579","Jose Fernando Gonzalez Martinez","Management"],
["34559","Jose Fernando Guerrero Camargo","Market"],
["25144","Fernando Manuel Ramirez Ramirez","Offering"],
["34218","Fernando Zu_iga Rivera","Delivery"],
["26155","Francisco Barba Chao","People"],
["14302","Francisco Jesus Iba_ez Cortina","Management"],
["26009","Francisco Javier Medina Vieyra","Market"],
["31690","Francisco Ismael Rivera Castro","Offering"],
["34443","Francisco Villafa_a Escalona","Delivery"],
["39454","Gabriel Aguilar Madrigal","People"],
["19430","Gabriel Perez Jimenez","Management"],
["19913","Gabriela Alvarez Martinez","Market"],
["36137","Gabriela Diaz Torres","Offering"],
["13741","Gabriela Imelda Hernandez Cardoso","Delivery"],
["23689","Gabriela Lazo Contreras","People"],
["24054","Gabriela Perez Gonzalez","Management"],
["24261","Gabriela Tamayo Mora","Market"],
["37123","Gaston Garcia Padilla Higuera","Offering"],
["26308","Sheila Georgina Dent Gomez","Delivery"],
["36863","Geraldayne Corral Castellanos","People"],
["34003","Gerardo Rocha Maldonado","Management"],
["21728","Gerardo Antonio Sam Ruiz","Market"],
["33222","Gerardo Yukio Shibata Salazar","Offering"],
["33086","Carlos Gerardo Velarde Felix","Delivery"],
["34546","Miguel Gonzalo Mu_oz Riojas","People"],
["24265","Gonzalo Roberto Nu_ez Urbina","Management"],
["26146","Guillermo Chavez Canales","Market"],
["25314","Luis Guillermo Damian Esteva","Offering"],
["32860","Guillermo Serafin Contreras","Delivery"],
["38084","Gustavo Menendez Ramirez","People"],
["25047","Hanaby Nayeli Sanchez Vazquez","Management"],
["18370","Hector Luis Espinosa Alonzo Romero","Market"],
["32662","Hector Antonio Porrua Torres","Offering"],
["33667","Hector Manuel Rebollo Arana","Delivery"],
["16310","Hector Miguel Valle Guerrero","People"],
["25958","Hector De Jesus Verdugo Moreno","Management"],
["20291","Hilda Carolina Fuente Reyes","Market"],
["37087","Humberto Javier Leon Castillo","Offering"],
["33292","Ignacio Velasco Garcia Lascurain","Delivery"],
["25162","Karen Iliana Islas Aquino","People"],
["36209","Irene Marques Garcia","Management"],
["24988","Isabel San Miguel Bolea","Market"],
["36034","Itzel Mijangos Revueltas","Offering"],
["30657","Itzel Roque Nava","Delivery"],
["11204","Jaime De Los Santos Castro Perez","People"],
["24001","Jaime Antonio Medina Ojeda","Management"],
["24043","Jaime Alfredo Rendon Lopez","Market"],
["32663","Jose Jaime Sandino Pi_a Soria","Offering"],
["38575","Jaime Fernando Vargas Diaz","Delivery"],
["26611","Jairo Portilla Garcia","People"],
["30319","Jareni Flores Vivas","Management"],
["25795","Luis Javier Campos Blazquez","Market"],
["39624","Javier Garcia-rosado Hospital","Offering"],
["21729","Javier Ramos Gonzalez","Delivery"],
["20075","Javier Rodrigo Torres Medina","People"],
["33560","Blanca Jazmin Rodriguez Cornejo","Management"],
["21914","Jessica Guadalupe Zuniga Palomino","Market"],
["12517","Jesus Roberto Aguilera Cruz","Offering"],
["35759","Jesus Baez Perez","Delivery"],
["36916","Jesus Consuelos Garcia","People"],
["33553","Jesus Samperio Quiroz","Management"],
["26753","Jinglin Wang","Market"],
["10082","Juan Manuel Ferron Solis","Offering"],
["14602","Joaquin Escalante Gonzalez","Delivery"],
["22617","Joel Humberto Gonzalez Guerra","People"],
["26039","Jorge Alberto Canto Lopez","Management"],
["10343","Jorge Cordova Salgado","Market"],
["34645","Jorge Andres Hernandez Sanchez","Offering"],
["33228","Jorge Roberto Senties Guerrero","Delivery"],
["22632","Jose Antonio Aguilar Trujillo","People"],
["11191","Jose Alarcon Irigoyen","Management"],
["21879","Jose Antonio Sierra Verde","Market"],
["39360","Jose Conrado Soriano Martinez","Offering"],
["36883","Jose Luis Lopez Ruiz","Delivery"],
["23481","Jose De Jesus Stuart Plascencia","People"],
["32867","Josue Antonio Careaga Moya","Management"],
["32248","Juan Carlos Camacho Gardu_o","Market"],
["13203","Juan Carlos Simon Baqueiro","Offering"],
["34505","Juan Pablo Contro Sierra","Delivery"],
["26384","Juan Ramon Alvarez Zarate","People"],
["33286","Juan Felipe Valero Barona","Management"],
["25949","Judith Guadalupe Ramirez Flores","Market"],
["30967","Juliana Bernal Rodriguez","Offering"],
["25374","Karina Areli Ortega Zafra","Delivery"],
["23677","Karinna Isabel Ceballos Ramos","People"],
["34429","Karla Deyanira Hernandez Santos","Management"],
["36659","Kevin De La Fuente Guizar","Market"],
["34468","Leonel David Casta_eda Mendoza","Offering"],
["39361","Leslick De Almaderiyack Castillo Flores","Delivery"],
["12990","Leticia Soriano Ramirez","People"],
["34566","Lizbeth Perez Ramos","Management"],
["22352","Anna Lorena Aranda Poucel","Market"],
["24772","Lorena Rodriguez Chavez","Offering"],
["33225","Lorena Romero Reyna","Delivery"],
["11429","Lourdes Margarita Hernandez Jimenez","People"],
["35532","Maria de Lourdes Vidal Flores","Management"],
["36178","Luis Guillermo Bastida Quiroz","Market"],
["34111","Luis Federico Carmona Nass","Offering"],
["14477","Luis Angel Carrera Avila","Delivery"],
["12905","Luis Alberto Flores Chamlati","People"],
["26537","Luis Enrique Gil Aguilar","Management"],
["38460","Luis Humberto Gomez Zacatelco","Market"],
["36438","Luis Rodolfo Huitron Vargas","Offering"],
["24898","Luis Rey Infante Avila","Delivery"],
["25968","Luis Alberto Manzo Patino","People"],
["33224","Magali Diaz Martinez","Management"],
["11373","Manuel Alejandro Cuevas Becerril","Market"],
["37221","Manuel Antonio Iraola","Offering"],
["35758","Manuel Enrique Ruiz Herrera","Delivery"],
["25841","Marcos Fernando Funes Funes","People"],
["25231","Marcos Pereira Corr_a","Management"],
["22179","Margarita Beatriz Cansino Diaz","Market"],
["15427","Maria Teresa Medina Franco","Offering"],
["37191","Mariajose Gutierrez De La Peza Gutierrez","Delivery"],
["35020","Mariana Flores Beltran","People"],
["37232","Mariana Gallardo Iglesias","Management"],
["25329","Mariana Andrea Mancera Cruz","Market"],
["26134","Mariana Alejandra Torales Soria","Offering"],
["23624","Mario De Jesus Morales Quezada","Delivery"],
["24884","Mario Isaac Olivares Rodriguez","People"],
["34976","Martha Elena Avila Ruiz","Management"],
["33227","Martha Belden Lankenau","Market"],
["21903","Martha Lilia Flores Zambrano","Offering"],
["23402","Martha Patricia Ramos Landero","Delivery"],
["25387","Martin Ariel Bazan Gonzalez","People"],
["33668","Maureen Pellicer Avalos","Management"],
["23989","Mayra Adriana Gomez Alvarado","Market"],
["31234","Melissa Amaro Gallegos","Offering"],
["32383","Miguel Angel Avenda_o Bonilla","Delivery"],
["26133","Miguel Angel Riego Alrich","People"],
["34710","Miguel Francisco Viveros Oseguera","Management"],
["23709","Moises Navarrete Romero","Market"],
["36877","Moises Sevilla Hernandez","Offering"],
["32661","Monica Alvarez Malvido","Delivery"],
["19884","Maynor Leonel Pineda Ramos","People"],
["20334","Nancy Melina Nava Huitron","Management"],
["33551","Natalia Loera Moreno","Market"],
["31111","Nathalie Jacquemain Millan","Offering"],
["23807","Nathaly Nu_ez Suarez","Delivery"],
["20294","Nelson Rodolfo Rergis Fernandez","People"],
["33485","Nestor Tinoco Diaz","Management"],
["20452","Norma Elena Valdes Rodriguez","Market"],
["35881","Oliver Lopez Mora","Offering"],
["26056","Omar Humberto Alejandro Cabrera Cortes","Delivery"],
["26332","Oscar Marin Chicharro","People"],
["38345","Oscar Bryan Santa Maria Lazo","Management"],
["26539","Francisco Osvaldo Morales Vilchis","Market"],
["25102","Pablo Ivan Blanco Montoya","Offering"],
["31085","Pablo Antonio Guzman Martinez","Delivery"],
["12693","Pablo Martin Del Campo Cardenas","People"],
["26083","Pamela Montelongo Arriola","Management"],
["24021","Pamela Patricia Olivares Gamboa","Market"],
["32347","Pamela Rico Martinez","Offering"],
["23515","Paola Vanessa Dieguez Martinez","Delivery"],
["24694","Pedro Arturo Sandoval Sanchez","People"],
["32327","Philipp Michael Loebenberger","Management"],
["34220","Polet Alejandra Venegas Castro","Market"],
["33218","Rafael Santiago Calderon Gomez","Offering"],
["25982","Ramon Eduardo Kuri Yzar","Delivery"],
["36862","Raul Alvarez Garcia","People"],
["26459","Raul Campero Sanchez De Tagle","Management"],
["24817","Raul Chao Hernandez","Market"],
["26076","Raul Cayetano Garay Padilla","Offering"],
["14949","Raul Lozano Guerra","Delivery"],
["38330","Raul Meyer Murguia","People"],
["21724","Raymundo Abrajan Landa","Management"],
["26280","Jose Raymundo Lira Avila","Market"],
["25476","Fernando Renato Nunez Ortiz","Offering"],
["32603","Ricardo Cabada Sapien","Delivery"],
["26153","Rigoberto Zazueta Rodriguez","People"],
["33455","Roberto Ivan Ochoa Gonzalez","Management"],
["15939","Roberto Rodriguez Ruiz","Market"],
["31215","Rocio Zaireth Valdivia Ceniceros","Offering"],
["32910","Rodrigo Aguilar Franco","Delivery"],
["34186","Rodrigo Espinosa Jurado","People"],
["33558","Rodrigo Raamses Gallo Landa","Management"],
["34973","Jose Rodrigo Enrique Gan Carrera","Market"],
["25083","Rodrigo Ruiz Gonzalez Elizalde","Offering"],
["36089","Rolando Alfonso Robles Cazares","Delivery"],
["25233","Rossana Reynoso Tamez","People"],
["38081","Ruben Sanchez Gomez","Management"],
["23823","Ruth Tejero Consuegra","Market"],
["36866","Samantha Negrete Tamayo","Offering"],
["25276","Santa Rojas Baeza","Delivery"],
["33424","Sara Paulina Arcos Cazares","People"],
["19896","Sara Macedo Garcia","Management"],
["17685","Saray Esquivel Alvarado","Market"],
["37194","Sebastian Izurieta Laris","Offering"],
["33223","Sergio Arturo Gonzalez Gutierrez","Delivery"],
["33285","Sergio Gerardo Meneses Echegaray","People"],
["36861","Sergio Alberto Yescas Garcia","Management"],
["21545","Silvia Marie Guillen Midence","Market"],
["35035","Simona Pollakova","Offering"],
["21167","Sylvia Loedy Chapa Gonzalez","Delivery"],
["36439","Tamara Carolina Duran Flores","People"],
["39600","Tania Paola Cabrera Castro","Management"],
["24600","Tanya Esther Cejudo Tinoco","Market"],
["38063","Tarek Ahmad Ghannameh Gonzalez","Offering"],
["33647","Tulio Espinosa Rodriguez","Delivery"],
["19062","Veronica Lafuente Ibarreche","People"],
["37192","Viani Palacios Gomez","Management"],
["30958","Victor Hugo Villeda Lopez","Market"],
["20195","Virgilio Serafin Toledo Figueroa","Offering"],
["24624","Waldo Vega Cabrera","Delivery"],
["33063","Walter Emmanuel Arrieta Felix","People"],
["33974","Xiomara Reyes Herrera","Management"],
["26520","Yair De La Cruz Cruz","Market"],
["12728","Yenny Salinas Ramos","Offering"],
["26183","Zuzana Prokesova","Delivery"]
    ];


var hobbies = ["Aviones Spotting ",
"Aerografía ",
"Actuacion",
"Aeromodelismo ",
"Amateur de Astronomía ",
"Radioaficionados ",
"Animales / Mascotas / Perros ",
"Artes ",
"Astrología ",
"Astronomía ",
"Backgammon (juego de mesa)",
"Bádminton (deporte de raqueta)",
"Béisbol ",
"Baloncesto ",
"Playa / Tomar el sol ",
"Caminar por la playa ",
"Chaquira (manualidad con collares)",
"Beatboxing (imitar sonidos por la boca)",
"Convertirse en un niño Abogado ",
"Tocar campanas",
"Danza del vientre ",
"Andar en bicicleta ",
"Observación de aves ",
"Filigran (doblar papel o alambre)",
"Acrobacias con bicicletas (BMX)",
"Herrería ",
"Blogging ",
"Juegos de mesa ",
"Canotaje ",
"Disfraces",
"Bonsai (Arbol con piedrecitas)",
"Bolos ",
"Mezcla de la cerveza ",
"Puente ",
"Llevar comida a la movilidad reducida ",
"Construir una casa para Habitat for Humanity ",
"Construcción de Muñecas ",
"Observador de mariposas ",
"Colección de botones",
"Caligrafía ",
"Escribir poemas o cuentos cortos",
"Campamento ",
"Hacer vela ",
"Piragüismo  o canotaje",
"Car Racing ",
"Casino (Apuestas) ",
"Buceo en Cuevas ",
"Cheerleading ",
"Ajedrez ",
"Iglesia / actividades de la iglesia ",
"Fumar cigarros ",
"Mirar nubes",
"Coleccionar monedas, postales",
"Coleccionar ",
"Coleccionar antigüedades ",
"Recopilación de ilustraciones ",
"Componer música ",
"Actividades Informáticas ",
"Cocina ",
"Cosplay ",
"Artesanías ",
"Bricolaje o trabajar con madera",
"Croché ",
"Ganchillo ",
"Punto de cruz ",
"Crucigramas ",
"Baile ",
"Dardos ",
"Reciclaje",
"Fotografía Digital ",
"Muñecas ",
"Dominó ",
"Dibujo ",
"Buceo ",
"Comer fuera ",
"Cursos ",
"Electrónica ",
"Bordado ",
"Entrevistar a gente en la calle",
"Ejercicio (aeróbic, pesas) ",
"Coches rápidos ",
"Esgrima ",
"Pesca ",
"Fútbol ",
"Maquillaje artistico",
"Acuarios",
"Frisbee Golf - Frolf ",
"Juegos  de cartas",
"Jardinería ",
"Venta de Garage",
"Genealogía ",
"Geocaching ",
"La caza del fantasma ",
"Glowsticking ",
"Ir al cine ",
"Golf ",
"Ir Racing Kart ",
"Hacer una pelicula casera",
"Guitarra ",
"Análisis de escritura a mano ",
"Ser boyscout",
"Excursionismo ",
"Vender jugos o pasteles",
"Reparación ",
"Ir a cine",
"Paseos a caballo ",
"Globo de aire caliente ",
"Hula hoop o hula hula",
"Caza ",
"Ilusión optica",
"Internet ",
"Los motores a reacción ",
"Fabricación de Joyas ",
"Rompecabezas ",
"Malabarismo ",
"Llevar un diario ",
"Cocina Química ",
"Cometas ",
"Volar cometas",
"Tejido ",
"Bordado",
"Láser ",
"Lanzar Dardos",
"Aprende a jugar al poker ",
"Aprender un idioma ",
"Aprender un instrumento ",
"Aprender a pilotar un avión ",
"Legos ",
"Escuchando la música ",
"Macramé ",
"Magia ",
"Hacer Model Cars ",
"Modelado con cerillas o topitos de algodon",
"Meditación ",
"Microscopía ",
"Metal que detecta  movimiento",
"Modelado de cohetes",
"Modelado de los buques ",
"Modelos ",
"Motocicletas ",
"Ciclismo de Montaña ",
"Montañismo ",
"Instrumentos Musicales ",
"Bordados ",
"Ser propietario de un coche antiguo ",
"Origami ",
"Pintura ",
"Paintball ",
"Fabricación de papel ",
"Papermache ",
"Paracaidismo ",
"Observar a la gente ",
"Fotografía ",
"Piano ",
"Pinochle ",
"Reproducción de música ",
"Jugar deportes de equipo ",
"Cerámica ",
"Títeres ",
"Pirotécnica ",
"Acolchado ",
"Rafting ",
"Fan de los trenes y carriles",
"R / C Barcos ",
"R / C Coches ",
"R / C Helicópteros ",
"R / C Aviones ",
"Lectura ",
"Lectura a las personas mayores ",
"Relajarte ",
"El alquiler de películas ",
"El rescate de animales maltratados o abandonados ",
"Robótica ",
"Recopilación de Rock ",
"Rockets ",
"Mecer de Bebés de SIDA ",
"Conocer Funcionamiento de las cosas",
"Acuarios de agua salada o dulce",
"De Scrapbooking ",
"Buceo ",
"Coser ",
"Pesca del tiburón ",
"Tiro al aire",
"Compras ",
"Cantar en el coro ",
"Skateboarding ",
"Dibujar ",
"Paracaidismo ",
"Sueño ",
"Pipas ",
"Snorkel ",
"Fabricación de Jabón o velas",
"Fútbol ",
"Socializar con los amigos / vecinos ",
"Pintura digital",
"Pasar tiempo con la familia / hijos ",
"Filatelia o coleccion de sobre y sellos",
"Narración de Cuentos ",
"Hacer nudos cuerdas ",
"Surf Pesca ",
"Natación ",
"Degustación de té ",
"Tenis ",
"Bobinas de Tesla ",
"Tetris ",
"Los mensajes de texto ",
"Textiles ",
"Frotamiento de Lápida",
"Herramienta de Recolección ",
"Recogida de juguetes ",
"Recolección de basura xD",
"Crear un negocio",
"Arreglar computadores a domicilio",
"Ir de viaje ",
"La caza del tesoro ",
"Trekkie ",
"Tutoría para niños ",
"Ver la televisión ",
"Crear un videojuego",
"Video Juegos ",
"Voluntario ",
"Ir a pie  por toda la cuidad",
"Leer o inventar historias de fantasia",
"Mirar los acontecimientos deportivos ",
"Windsurf ",
"Vinificación ",
"Trabajos en madera ",
"Trabajo en una despensa de alimentos ",
"Trabajo en los coches ",
"Escritura ",
"Yoga ",
"YoYo",
"Polcelanicron o porcelana fria"];


db.connect('mongodb://localhost:27017/townhall', function(err) {
    if (err) {
        console.log('Unable to connect to Mongo');
        process.exit(1);
    }
    
    makeCalls();
}); 
