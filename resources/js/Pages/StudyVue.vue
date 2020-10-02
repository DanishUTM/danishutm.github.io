<template>
	<main id="main" class="bg-blue-400">
		<div id="computedvsmethod-example">
			<p id="example">Original message: "{{ message }}"</p>
			<p id="elpmaxeC">Computed reversed message: "{{ reversedMessageComputed }}"</p>
			<p id="elpmaxeM">Methodical reversed message: "{{ reverseMessageMethod() }}"</p>
			<br/>
			<p id="nowC">Computed now: "{{ nowComputed }}"</p>
			<p id="nowM">Methodical now: "{{ nowMethod() }}"</p>
		</div>
		<br/>
		<div id="todo-list-example">
			<form v-on:submit.prevent="addNewTodo">
				<label for="new-todo">Add a todo</label>
				<input
				v-model="newTodoText"
				id="new-todo"
				placeholder="E.g. Feed the cat"
				>
				<button class="button bg-white">Add</button>
			</form>
			<ul>
				<li
				is="todo-item"
				v-for="(todo, index) in todos"
				v-bind:key="todo.id"
				v-bind:title="todo.title"
				v-on:remove="todos.splice(index, 1)"
				></li>
			</ul>
		</div>
		<br/>
		<div id="forminput">
			<form v-on:submit.prevent>
				<p>This your name: {{ name }}</p>
				<p>This your address: {{ address }}</p>
				<label for="name">Name:</label>
				<input v-model="name" id="name"/>
				<br/>
				<label for="address">Address:</label>
				<input v-model.lazy="address" id="address"/>
				<br/>
				<input type="checkbox" id="checkbox" v-model="checked">
				<label for="checkbox">{{ checked }}</label>
				<br/>
				<input type="radio" id="one" value="One" v-model="picked">
				<label for="one">One</label>
				<br>
				<input type="radio" id="two" value="Two" v-model="picked">
				<label for="two">Two</label>
				<br>
				<span>Picked: {{ picked }}</span>
				<br/>
				<select v-model="selected">
					<option disabled value="">Please select one</option>
					<option>A</option>
					<option>B</option>
					<option>C</option>
				</select>
				<span>Selected: {{ selected }}</span>
				<br/>
				<select v-model="multiSelect" multiple>
					<option>A</option>
					<option>B</option>
					<option>C</option>
				</select>
				<span>Selected: {{ multiSelect }}</span>
				<br/>
				<select v-model="multiSelect2">
				<option v-for="(option, index) in options" v-bind:value="option.value" v-bind:key="index">
					{{ option.text }}
				</option>
				</select>
				<span>Selected: {{ multiSelect2 }}</span>
				<br/>
				<button class="button bg-white">Add</button>
			</form>
		</div>
		<br/>
		<div id="vuecomponents">
			<button-counter></button-counter>
			<br/>
			<blog-post
			v-for="post in posts"
			v-bind:key="post.id"
			v-bind:post="post"
			></blog-post>
		</div>
	</main>
</template>

<script>
    export default {
		components: {
			//User created Vue Components
			'todo-item': {
				template: '\
					<li>\
					{{ title }}\
					<button class="button bg-white" v-on:click="$emit(\'remove\')">Remove</button>\
					</li>\
				',
				props: ['title']
			},
			'button-counter': {
				data: function () {
					return {
						count: 0
					}
				},
				template: '<button class="button bg-white" v-on:click="count++">You clicked me {{ count }} times.</button>'
			},
			'blog-post': {
				props: ['post'],
				template: `
					<div class="blog-post">
					<h3>{{ post.title }}</h3>
					<div v-html="post.content"></div>
					</div>
				`
			}
		},
        data() {
			return {
				message: 'Danish Rasali',
				question: '',
				answer: 'I cannot give you an answer until you ask a question!',
				newTodoText: '',
				todos: [
					{
						id: 1,
						title: 'Do the dishes',
					},
					{
						id: 2,
						title: 'Take out the trash',
					},
					{
						id: 3,
						title: 'Mow the lawn'
					}
				],
				nextTodoId: 4,
				name: "Danish",
				address: "Rumag",
				checked: false,
				picked: null,
				selected: null,
				multiSelect: [],
				options: [
					{ text: 'One', value: 'A' },
					{ text: 'Two', value: 'B' },
					{ text: 'Three', value: 'C' }
				],
				option: { text: null, value : null },
				multiSelect2: [],
				posts: [
					{ id: 1, title: 'My First Post', content: 'Ahoy! \'Tis be me first post, arr arr arr!' },
					{ id: 2, title: 'My Second Post Mateys!', content: 'Another post by meself on tis blessed o\' days, more will come, arr arr arr!' },
					{ id: 3, title: 'My Last Post :(', content: '\'tis me last post, I lost all th\' doubloons' }
				],
				post: { id: null, title: null, content: null }
			}
		},
		computed: {
			reversedMessageComputed: function () {
				return this.message.split('').reverse().join('')
			},
			nowComputed: function () {
				return Date.now()
			}
		},
		methods: {
			reverseMessageMethod: function () {
				return this.message.split('').reverse().join('')
			},
			nowMethod: function () {
				return Date.now()
			},
			addNewTodo: function () {
				this.todos.push({
					id: this.nextTodoId++,
					title: this.newTodoText
				})
				this.newTodoText = ''
			}
		}
    }
</script>
