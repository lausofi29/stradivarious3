// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/nuevo/',
    	url: 'nuevo.html',
    	name: 'nuevo',
  		},
		{
		path: '/ropa/',
    	url: 'ropa.html',
    	name: 'ropa',
  		},
		{
		path: '/collection/',
    	url: 'collection.html',
    	name: 'collection',
  		},
		{
		path: '/accesorios/',
    	url: 'accesorios.html',
    	name: 'accesorios',
  		},
		
			{
		path: '/zapatos/',
    	url: 'zapatos.html',
    	name: 'zapatos',
  		},
			{
		path: '/inspirate/',
    	url: 'inspirate.html',
    	name: 'inspirate',
  		}, 
			{
		path: '/Lista/',
    	url: 'Lista.html',
    	name: 'Lista',
  		},
			{
		path: '/Fotos/',
    	url: 'Fotos.html',
    	name: 'Fotos',
  		},
			{
		path: '/fotos-nuevo/',
    	url: 'fotos-nuevo.html',
    	name: 'fotos-nuevo',
  		},
			{
		path: '/sueter/',
    	url: 'sueter.html',
    	name: 'sueter',
  		},
			{
		path: '/belt/',
    	url: 'belt.html',
    	name: 'belt',
  		},
			{
		path: '/platform/',
    	url: 'platform.html',
    	name: 'platform',
  		}
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

