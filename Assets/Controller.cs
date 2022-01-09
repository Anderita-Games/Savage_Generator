using UnityEngine;
using System.IO;

public class Controller : MonoBehaviour {
  public UnityEngine.UI.Text Hate_Text;
  public GameObject Osaze, Instructions;
  public TextAsset Phrases;

  // Start is called before the first frame update
  void Start() {
  	Instructions.SetActive(true);
  }

  public void Generation () {
    Osaze.SetActive(false);
  	Instructions.SetActive(false);
  	if (Random.Range(0,10000) == 6666) { // As of 2022, this guy is still a dingus!
  		Osaze.SetActive(true);
  		Hate_Text.text = "You are him.";
  	}else {
      Hate_Text.text = RandomLine(new StreamReader(new MemoryStream(Phrases.bytes)));
      // TODO: Voice to Speech
  	}
  }

  public string RandomLine(StreamReader reader) {
    string line = reader.ReadLine(), chosen = line;
    for (int numberSeen = 2; line != null; numberSeen++, line = reader.ReadLine()) {
      if (Random.Range(0, numberSeen) == 0) chosen = line;
    }
    return chosen;
  }
}
