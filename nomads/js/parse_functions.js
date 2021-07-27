// Init Parse with keys
Parse.initialize("lglvfzD2nSfx9pIBgR0cy7jFVjfqGs5tT1qRPzfh", "xuZLtV8iREPhmVFdpJyqE6hgSDwZs3bzEvcumvPh");
    
/*Defining Parse Variables
var Trip = Parse.Object.extend("Trip");
var Entry = Parse.Object.extend("Entry");
    
//Defining Global Variables
var listTrips = [];
var listEntries = [];
var currentTrip = "no trip selected";
var currentEntry = "no entry selected";
var currentUser = "no user selected";


/////////SHOW EXISTING TRIPS
function getTrip() {
	var query = new Parse.Query(Trip);
    query.descending("createdAt");
    
	query.find({
		success: function(results) {
			for (var i in results) {
                console.log("the results[i] is: " + results[i]);
             
        var s = "<div class='swiper-slide trip_li' id="+results[i].id+">";
        s+= "<div class='timeline-image'><img src='images/balloon.jpg' alt='Picture'></div>";
        s+= "<div class='timeline-content'>";
        s+="<h2 class='entry-title'>"+results[i].get("name")+"</h2>";
        s+="<p class='entry-description'>"+results[i].get("description")+"</p>";
        s+="<p class='entry-dates'><i class='fa fa-calendar'></i>"+moment(results[i].createdAt).format('L')+" to "+moment(results[i].updatedAt).format('L')+"</p>";
        s+="<p class='entry-contributor'><i class='fa fa-user'></i>"+results[i].get("contributor")+"</p>";
        s+="</div></div></div>";
                
				$("#existing_trips").append(s);
               // activateSwiper();
			}
			//I'm calling getEntry here and works, but shouldn't be here! getEntry(results[i]);
		}, error: function(error){
			console.log("error trying to retrieve the existing trip list");
		}
	})
}

getTrip();


function getEntry(tripId) {
    console.log("getting entries for trip id:" + tripId);
	var query = new Parse.Query(Entry);
    query.include('user');
    
    query.descending("createdAt");
	query.equalTo("mytrip", tripId);
    
	query.find({
		success: function(results) {
            console.log("Get Entry:"+results.length);
            currentEntries = results;
			for (var i in results) {
                
                console.log("Get Entry Place:"+results[i].get("place"));
                var parseDate = results[i].createdAt;
                console.log(parseDate);
                var date = moment(parseDate).calendar();
                
                var src = results[i].get("image").url();
                if ( src === undefined) {
                    src = "../images/balloon.jpg";
                }
                    
                var s = "<div class='entry_li tile_padding e"+results[i].get("author").id+"' id="+results[i].id+"><div class='tile' style='background-image:url(" + src + ")'></div></div>";
                
                
            /*s+= "<div class='timeline-content'>";
            s+= "<p class='date'>"+date+", "+results[i].get("place")+"</p></div>";
            s+= "<div class='timeline-image'><img src="+src+" alt='Picture'></div></li>";*/
               /* $('.tile').css('background-image','url(' + src + ')');

                $("#existing_entries").append(s);
			}
			console.log("***************");
		}, error: function(error){
			console.log("error trying to retrieve the existing entry list:"+error.message);
		}
	})
}

/////////SHOW DETAILS ONCE CLICKED ON ENTRY

function getDetails(entryId) { // tripId: String
    console.log("Searching for entry:"+entryId);
	var query = new Parse.Query(Entry);
  
    query.equalTo("objectId", entryId);
    query.include("trip");
    
    query.find({
		success: function(results) {
            console.log("get details results:"+results);
			for (var i in results) {
                var parseDate = results[i].get("createdAt");
                var date = moment(parseDate).calendar();
                var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    +results[i].get("geolocation")+"&zoom=14&size=400x300&sensor=false";
                
                console.log("retrieving details for entry id" + results[i].id);
                $("#entry_things").append("<img class='details_photo' src="+results[i].get("image").url()+">");
                $("#entry_things").append("<input class='things' readonly value='"+results[i].get("text")+"'/>");
                
                $("#entry_things").append("<div id='mapholder'><img src='"+img_url+"'></div>");
                $("#entry_things").append("<li class='things'>"+date+"</li>");
			
			}
			console.log("***************");
		}, error: function(error){
			console.log("error trying to retrieve the details of current entry");
		}
	})
}

/////////CLICK ON EXISTING TRIP
	$("#existing_trips").on("click", ".trip_li", function() {
		console.log("Trip li in existing trip clicked");
		$("#trip_area").css("display","none");
		$("#entry_area").css("display","block");
        var name = $(this).find(".entry-title").text();
        
        console.log("name is" + name);
		$("#entry_trip_name").text(name);
        //is this correct??
        var id = $(this).attr('id');
        $("#entry_trip_name").addClass(id);
        console.log("id is" + id);
		$("#existing_entries").addClass("a"+id);
        //here I need to call the fuction to populate the trip with the entries, but not working
        
        currentTrip = id;
        getEntry(id);
	});
    
    
/////////CLICK ON EXISTING ENTRY
    $("#existing_entries_andrea").on("click", ".entry_li", function() {
		console.log("Trip li in existing trip clicked");
		$("#entry_area").css("display","none");
		$("#details_area").css("display","block");
        var name = $(this).text();
        console.log("name is" + name);
		$("#entry_entry_name").text(name);
        var id = $(this).attr('id');
        console.log("entry id is" + id);
        getDetails(id);
	});
    $("#existing_entries_bruno").on("click", ".entry_li", function() {
		console.log("Trip li in existing trip clicked");
		$("#entry_area").css("display","none");
		$("#details_area").css("display","block");
        var name = $(this).text();
        console.log("name is" + name);
		$("#entry_entry_name").text(name);
        var id = $(this).attr('id');
        console.log("entry id is" + id);
        getDetails(id);
	});
*/	
	
///////////LOGIN AND SIGN UP
///////////////LOGIN ACTIVATES
    $("#login").submit(function(event){
			var name = $("#login-name").val();
			var pass = $("#login-password").val();
			login(name, pass);
			showPages();
		});
    
//////////SIGNUP ACTIVATES	
		$("#signup").submit(function(event) {
			console.log("Sign in submit");
			var name = $("#signup-name").val();
			var email = $("#signup-email").val();
			var password = $("#signup-password").val();
			signup(name, email, password);
			showPages();
		});
	function showPages(){
		event.preventDefault();
		$("#login_area").css("display","none");
		$("#trip_area").css("display","block");
	}
    
//////////SIGN UP FUNCTION
	 function signup(username, email, password) {
		console.log("Sign up new User", username, email, password);
		var user = new Parse.User();
		user.set("username", username);
		user.set("password", password);
		user.set("email", email);
		
		user.signUp(null, {
			success: function(user){
				console.log("Sign up Success:");
			},
			error: function(user, error) {
				console.log("Sign up error:"+error.message);
			}
		});
		
	}

/////////LOGIN FUNCTION
	function login(username, password) {
		Parse.User.logIn(username, password, {
			success: function(user){
				console.log("Login Success:"+user.username); //is not getting the user.username
                $("#login_area").css("display","none");
		        $("#trip_area").css("display","block");
			},
			error: function(user, error) {
				console.log("login error:"+error.message);
			}
		});
	}
/*

///////////////CREATE TRIP
	$("#trip").submit(function(event){
        event.preventDefault();
        console.log("Trip is being added");
        
       var fileUploadElement = $("#trip-image")[0];
	   var filepath = $("#trip-image").val();
	   var filename = filepath.split('\\').pop();
        
       if (fileUploadElement.files.length > 0) {
			// If there's a file upload it then add a post
			var file = fileUploadElement.files[0];
			var parseFile = new Parse.File(filename, file);
			
			parseFile.save().then(function() {
				console.log("ParseFile Success");
				addTrip(parseFile);
			}, function(error) {
				console.log("ParseFile Error:"+error.message);
			});
		} else {
			// Else if no file just upload a post
			addTrip(false);
		}
      console.log("Entry is ok, proceed to addEntry");
        
        addTrip(trip_name, trip_description);
        //showPages2(trip_name);
        console.log("Got data for new trip", trip_name, trip_description);
    });

////////////ADD TRIP
	function addTrip(file) {
		console.log("echo");
		//here I need to create a new object for trip
		var Trip = Parse.Object.extend("Trip");
		var trip = new Trip();
        
        var trip_name = $("#trip-name").val();
        var trip_description = $("#trip-description").val();
        var trip_date_start = $("#trip-date-start").val();
        var trip_date_end = $("#trip-date-end").val();
		
		trip.set("name", trip_name);
		trip.set("description", trip_description);
		trip.set("author", Parse.User.current());
        trip.set("dateStart", trip_date_start);
        trip.set("dateEnd", trip_date_end);
        
        if (file) {
		  entry.set("image", file);
        }
		
		trip.save(null, {
			success: function(trip){
				console.log("Created trip with success");
			},
			error: function(trip, error) {
				console.log("Adding Trip error:"+error.message);
			}
		});
	}
	////
	function showPages2(trip_name){
		event.preventDefault();
		$("#trip_area").css("display","none");
		$("#entry_area").css("display","block");
        $("#entry_trip_name").text(trip_name);
	}
    
/////////////CREATE ENTRY
	$("#entry").submit(function(event){
       event.preventDefault();
       console.log("Entry is being submitted");
       var trip_name = $("#h1").text();
        
       var fileUploadElement = $("#entry-image")[0];
	   var filepath = $("#entry-image").val();
	   var filename = filepath.split('\\').pop();
        
       if (fileUploadElement.files.length > 0) {
			// If there's a file upload it then add a post
			var file = fileUploadElement.files[0];
			var parseFile = new Parse.File(filename, file);
			
			parseFile.save().then(function() {
				console.log("ParseFile Success");
				addEntry(parseFile);
			}, function(error) {
				console.log("ParseFile Error:"+error.message);
			});
		} else {
			// Else if no file just upload a post
			addEntry(false);
		}
      console.log("Entry is ok, proceed to addEntry");
    });
        
////////////ADD ENTRY 
	function addEntry(file) {
        console.log("addEntry is activated");
		var Entry = Parse.Object.extend("Entry");
		var entry = new Entry();
        
        var entry_text = $("#entry-text").val();
        var entry_place = $("#entry-place").val();
        var entry_tag = $("#entry-tag").val();
        var entry_geoloc = $("#entry-geo").val();
        var entry_trip = $("#entry_trip_name").attr("class");
        console.log(entry_trip);
		
		entry.set("text", entry_text);
		entry.set("place", entry_place);
		entry.set("tag", entry_tag);
		entry.set("author", Parse.User.current());
        entry.set("geolocation", entry_geoloc);
        entry.set("mytrip", entry_trip);
        
		if (file) {
		  entry.set("image", file);
        }
		
		entry.save(null, {
			success: function(entry){
				console.log("Created entry with success");
			},
			error: function(entry, error) { //giving error here: invalid type for key image, expected string, but got file
				console.log("Adding entry error:"+error.message);
			}
		});
	   console.log("addEntry works!");
       showPages2(trip_name);
    }
	////
	function showPages3(){
		event.preventDefault();
		$("#entry_area").css("display","none");
		$("#done_area").css("display","block");
	}
	
    // Initialize page stuff
    
    if (Parse.User.current()) {
        // user logged in 
        // show add entry screen
        $("#login_area").hide();
        $("#trip_area").css('display','block');
    } else {
        // show log in screen
    }

    ////LOGOUT
$("#logout").on("click", function(){
    Parse.User.logOut();
    $("#trip_area").css("display","none");
    $("#entry_area").css("display","none");
    $("#login_area").css("display","block");
})


for(var i=1; i<14;i++){
    var s= "<div class='tile_padding'><div class='tile' style='background-image:url(../images/" + i + ".JPG)'><div class='tile_overlay'>x</div></div></div>";
    $("#all_photos").append(s);
}    
*/