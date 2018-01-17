#pragma strict
import System.IO;

var Hate_Text : UnityEngine.UI.Text;
var Osaze : GameObject;
var Instructions : GameObject;
var Phrases : TextAsset;
var Noise : AudioSource;

function Start () {
	Osaze.SetActive(false);
	Instructions.SetActive(true);
}

function Generation () {
	Osaze.SetActive(false);
	Instructions.SetActive(false);
	var The_One = Random.Range(1,10000);
	if (The_One == 6666) {
		Osaze.SetActive(true);
		Hate_Text.text = "You are him.";
	}else {
		var SR : StreamReader = new StreamReader(new MemoryStream(Phrases.bytes));
		var Number_Random : int = Random.Range(1, 271);
		while (Number_Random > 0) {
			Hate_Text.text = SR.ReadLine();
			Number_Random--;
		}
		Hate_Text.text = SR.ReadLine();
		SR.Close();
		Text_To_Speech();
	}
}

function Text_To_Speech () {
	var The_Shit : String = Hate_Text.text.ToString();
	var Letter : int = 1;
	while (Letter < The_Shit.length + 1) {
		if (The_Shit.Substring(Letter - 1, 1) != " " && The_Shit.Substring(Letter - 1, 1) != "," && The_Shit.Substring(Letter - 1, 1) != "'" && The_Shit.Substring(Letter - 1, 1) != "." && The_Shit.Substring(Letter - 1, 1) != "?") {
			Debug.Log("Alphabet/" + The_Shit.Substring(Letter - 1, 1).ToUpper());
			Noise = GameObject.Find("Alphabet/" + The_Shit.Substring(Letter - 1, 1).ToUpper()).GetComponent.<AudioSource>();
			Noise.Play();
		}
		yield WaitForSeconds(.25);
		Letter++;
	}
}