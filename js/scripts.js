// Button construction function
function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this; //kiedy funkcja jest parametrem innej funkcji następuje utrata kontekstu
						//wskazujemy element za pomocą zmiennej self
		this.$element = $('<button>');  //trzyma we właściwości element przycisk (element DOM)
		this.$element.text(this.text); //ustawiamy tekst na przycisku za pomocą metody text
		this.$element.click(function() {
			alert(self.text);			//wyświetli po kliknięciu tekst na ekranie
		});
		$('body').append(this.$element); //do body przypinamy element
	}
};

var btn1 = new Button('Hello!');  //stworzenie instancji
btn1.create(); //wywołujemy metodę create w celu stworzenia elementu
