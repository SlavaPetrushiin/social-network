import dialogsPageReducer from './dialogsPage-reducer';
import profilePageReducer from './profilePage-reducer';

let store = {
	_state : {
		profilePage : {
			posts : [
				{id: 1, message: "Hi, how are you", likesCount: 10},
				{id: 2, message: "It's my first post", likesCount: 25},
			],
			newPostText: 'it-kamasutra.com'	
		},
		dialogsPage : {
			dialogs : [
				{id : 1, name: 'Sveta', 'url' : 'https://img2.freepng.ru/20180518/qqw/kisspng-avatar-computer-icons-5aff72c4df41b8.1805380615266905009145.jpg'},
				{id : 2, name: 'Ruslan', 'url' : 'https://im0-tub-ru.yandex.net/i?id=85bcd676262e00d396cd05f4204bfff2&n=33&w=150&h=150'},
				{id : 3, name: 'Slava', 'url' : 'https://retohercules.com/images/face-icon-png-1.png'},
				{id : 4, name: 'Toma', 'url' : 'https://retohercules.com/images/face-icon-png-1.png'},
				{id : 5, name: 'Nika', 'url' : 'https://i.pinimg.com/736x/6f/0c/b0/6f0cb03a78e7f7dbfa81c31b1b45badf--photos-of-animals-animal-portraits.jpg'},
				{id : 6, name: 'Ivan', 'url' : 'https://img2.freepng.ru/20180325/otq/kisspng-beard-silhouette-clip-art-beard-5ab80c52060ec5.1534278815220112180248.jpg'}
			],
		
			messages : [
				{id : 0, message: 'Современные технологии достигли такого уровня, что сплочённость команды профессионалов, в своём классическом представлении, допускает внедрение кластеризации усилий. А ещё ключевые особенности структуры проекта будут описаны максимально подробно. Идейные соображения высшего порядка, а также современная методология разработки позволяет выполнить важные задания по разработке поставленных обществом задач.'},
				{id : 1, message: 'Не следует, однако, забывать, что понимание сути ресурсосберегающих технологий, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для экспериментов, поражающих по своей масштабности и грандиозности.'},
				{id : 2, message: 'Благородные стремления не спасут: спикеры палаты госдумы негодуют'},
				{id : 3, message: 'Повседневная практика показывает, что синтетическое тестирование требует анализа укрепления моральных ценностей.'},
				{id : 0, message: 'Мы вынуждены отталкиваться от того, что курс на социально-ориентированный национальный проект напрямую зависит от распределения внутренних резервов и ресурсов. Приятно, граждане, наблюдать, как некоторые особенности внутренней политики являются только методом политического участия и ассоциативно распределены по отраслям.'}
			],
			newTextMessage: ''
		},
		sidebar :{
			friends : [
				{'friendName' : 'Slava', 'url' : 'https://img2.freepng.ru/20180210/dle/kisspng-cartoon-illustration-cartoon-boy-avatar-no-expression-5a7e7d120190d1.0706177315182389940064.jpg'},
				{'friendName' : 'Ruslan', 'url' : 'https://img2.freepng.ru/20180210/dle/kisspng-cartoon-illustration-cartoon-boy-avatar-no-expression-5a7e7d120190d1.0706177315182389940064.jpg'},
				{'friendName' : 'Vova', 'url' : 'https://img2.freepng.ru/20180210/dle/kisspng-cartoon-illustration-cartoon-boy-avatar-no-expression-5a7e7d120190d1.0706177315182389940064.jpg'},
			]
		}
	},
	_callSuscriber(){
		console.log('We work!!!')
	},
	subscribe(observer){
		this._callSuscriber = observer;
	},
	dispatch(action){
		this._state.profilePage = profilePageReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
		this._callSuscriber(this._state);
	},
	getState(){
		return this._state;
	}
};

export default store;

window.store  = store;
