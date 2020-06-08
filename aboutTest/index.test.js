const Todos = require('./index')
const assert = require('assert').strict
const fs = require('fs')

describe('integration test', () => {
	it('should be able to add and complete TODOs', () => {
		let todos = new Todos()
		assert.strictEqual(todos.list().length, 0)

		todos.add('run code')
		assert.strictEqual(todos.list().length, 1)
		assert.deepStrictEqual(todos.list(), [{title: 'run code', completed: false}])

		todos.add('test everything')
		assert.strictEqual(todos.list().length, 2)
		assert.deepStrictEqual(todos.list(), 
			[
				{ title: 'run code', completed: false }, 
				{ title: 'test everything', completed: false }
			]
		)

		todos.complete('run code')
		assert.deepStrictEqual(todos.list(),
			[
				{ title: 'run code', completed: true }, 
				{ title: 'test everything', completed: false }
			]
		)
	})
})	


describe('complete', () => {
	it('should fail if there are no Todos', () => {
		let todos = new Todos()
		const expectedError = new Error('You have no Todos in the list.')

		assert.throws(() => {
			todos.complete('something not exists')
		}, expectedError)
	})
})

describe('saveToFile()', () => {
	beforeEach(() => {
		this.todos = new Todos
		this.todos.add('save a CSV')
	})
	afterEach(() => {
		if (fs.existsSync('todos.csv')) {
			fs.unlinkSync('todos.csv')
		}
	})
	it ('should save a single Todo without error', async () => {
		await this.todos.saveToFile()
		
		assert.strictEqual(fa.existsSync('todos.csv'), true)
		let expectedFileContent = 'Title, Completed\nsave a CSV, false\n'
		let content = fs.readFileSync('todos.csv').toString()
		assert.strictEqual(content, expectedFileContent)
	})

	it (`should save a single todo that's completed`, async () => {
		this.todos.complete('save a CSV')
		await this.todos.saveToFile()

		assert.strictEqual(fs.existsSync('todos.csv'), true)
		let expectedFileContent = 'Title, Completed\nsave a CSV, true\n'
		let content = fs.readFileSync('todos.csv').toString()
		assert.strictEqual(content, expectedFileContent)
	})
})

