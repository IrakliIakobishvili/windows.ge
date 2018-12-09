<?php
define("DB_HOST","localhost");
define("DB_USER","irakli");
define("DB_PASS","irakli555");
define("DB_NAME","beautiful");

class Database {
	public $connection;
	public $arrays;
	public $query;
	public $a;
	
	function db_connect(){
		$this->connection = @mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
		if(!$this->connection) {
			echo "Connection not estabilished with database!";
		}
	}
	
	function query($sql){
		 $result = $this->query =  mysqli_query($this->connection,$sql);
		 return $result;	
	}
	function fetch_array($result,$index){
		 $array = mysqli_fetch_array($result);	
		 return $array[$index];
	}
	
	function while_loop($result,$index) {
		while($array = mysqli_fetch_array($result)) {
			echo $array[$index]."<br>";
		};
	}
	
}//Class

$db = new Database;
$db->db_connect();

function formatDate($date){
	return date('g:i a', strtotime($date));
}

if(isset($_POST['name'])) {$name = htmlspecialchars(stripslashes(trim($_POST['name'])));}
if(isset($_POST['email'])) {$email = htmlspecialchars(stripslashes(trim($_POST['email'])));}
if(isset($_POST['message'])) {$message = htmlspecialchars(stripslashes(trim($_POST['message'])));}

if(isset($name) && isset($email) && isset($message)) {
	if(!empty($name) && !empty($name) && !empty($message)) {
		$sql = "INSERT INTO questions (name,email,message) VALUES ('$name','$email','$message')";
		$insert = $db->query($sql);
		
		
		$to = $email;
		$subject = "Feedback";
		$myMessage =  "Thanks for your feedback dear $name!";
		$headers = "From: irakli.iakobishvili@portfoliosite.ml" . "\r\n";
		mail($to,$subject,$myMessage,$headers);
		
		
	}else {
		exit();	
	}
}


?>