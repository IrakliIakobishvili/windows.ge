<?php
define("DB_HOST","localhost");
define("DB_USER","irakli");
define("DB_PASS","irakli555");
define("DB_NAME","windows");

class Database {
	public $connection;
	public $arrays;
	public $query;
	
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

if(isset($_POST['email'])) {$email = htmlspecialchars(stripslashes(trim($_POST['email'])));}

if(isset($email)) {
	if(!empty($email)) {
		$sql = "INSERT INTO subscribers (email) VALUES ('$email')";
		$insert = $db->query($sql);
		
		$to = $email;
		$me = "irakli.iakobishvili@portfoliosite.ml";
		$subject = "Source Files";
		$message = 'Download Link: '.' http://www.portfoliosite.ml/files/SourceFiles.zip';
		$headers = "From: ".$me."" . "\r\n";
		mail($to,$subject,$message,$headers);
	}else {
		exit();	
	}
}


?>