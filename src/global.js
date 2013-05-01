(function($){
	$('document').ready(function(){

	//Definitions
	var target,
		numberOfTiles 	= 8, 
		colors			= ["#90d8ff", "#2fb2f9", "#2a6a8c", "#004067"],
		endOnSolidColor = false,
		config 			= {
			'target': '#grid',
			'root'	: 'ul',
			'el'	: 'li'
		};

	function Grid( config, numberOfTiles, colors ){
		this.target 			= config.target;
		this.root 				= config.root;
		this.el 				= config.el;
		this.numberOfTiles 		= numberOfTiles;
		this.colors 			= colors;
		this.endOnSolidColor	= endOnSolidColor;

		this.create 			= function(){
			var root 	= document.createElement(this.root),
				elems;
			for(var i = 0; i < this.numberOfTiles; i++){
				$(root).append('<li id="' + i + '" />');
			}
			return root;
		};
		this.shuffleColors 	= function( colors, endOnSolidColor ){
			var colorSelection = [];

			for(var i = 0; i < this.numberOfTiles; i++){
				var idx 	= (Math.ceil((Math.random() * colors.length)) - 1),
					color 	= colors[idx];
					colorSelection.push(color);

				$('#' + i).css('backgroundColor', color);
			}
			return colorSelection;
		};

		this.checkColors = function( color_selection, colors )
		{
			var matches = [],
				len 	= colors.length;

			//outerloop to grab each color from the main array - 4 times
			for(var i = 0; i < len; i++)
			{
				var current_color = colors[i],
					inc = 0;

				//inner loop to check it against the color selection - 8 times
				for(var j = 0; j < color_selection.length; j++){
					var selected_color = color_selection[j];
					 	
					if(current_color === selected_color){
						inc++;
					}
				}
				matches.push(inc);	
			}
			return  Math.max.apply(Math, matches);
		}

		this.reShuffle = function( matches )
		{
			var shuffleAgain = false;
			if( matches > 2 ){
				shuffleAgain = true;
				this.initColors();
			}
			return shuffleAgain;
		}

		this.attatch = function( html )
		{
			$(this.target).append( html );
		}

		this.initColors = function()
		{
			var colorSelection = this.shuffleColors( colors, endOnSolidColor ),
			matches = this.checkColors( colorSelection, colors );
			this.reShuffle( matches );
		}
	}

	//implementation
	window.grid = new Grid( config, numberOfTiles, colors ),
		gridHtml = grid.create( target );
		grid.attatch( gridHtml );
		grid.initColors();
	});
}(jQuery));