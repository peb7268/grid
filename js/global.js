(function($){
	$('document').ready(function(){

	//Definitions
	var target,
		numberOfTiles 	= 8, 
		colors			= ["#90d8ff", "#2fb2f9", "#2a6a8c", "#004067"],
		endOnSolidColor = true,
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
		this.attatch = function( html )
		{
			$(this.target).append( html );
		}
		this.checkColors = function( selection )
		{
			var matches = [],
				len 	= selection.length;
			//outerloop to grab each color
			for(var i = 0; i < len; i++)
			{
				var current_color = selection[i];

				//inner loop to check it against the rest
				for(var j = 0; j < len; j++){
					if(current_color == selection[j]){
						matches.push(selection[j]);
					}
				}
			}
			if(matches.length > this.numberOfTiles / 4){
				console.log('shuffling again. limit is', this.numberOfTiles / 4);
				this.shuffleColors( colors, endOnSolidColor );
			}
		}
		
		//Call yourself
		var gridHtml = this.create( target );
		this.attatch( gridHtml );
	}
	
	//implementation
	window.grid = new Grid( config, numberOfTiles, colors );
	var colorSelection = grid.shuffleColors( colors, endOnSolidColor );
	grid.checkColors( colorSelection );
	});
}(jQuery));