import {
	parse
} from './parser/index'
import {
	createCompilerCreator
} from './create-compiler'

/**
 * compileToFunctions => compile => baseCompile
 */
function baseCompile(template, options) {
	//生成语法解析树
	const ast = parse(template.trim(), options)
		// optimize(ast, options)
		// const code = generate(ast, options)
		// return {
		//   ast,
		//   render: code.render,
		//   staticRenderFns: code.staticRenderFns
		// }
}

export const createCompiler = createCompilerCreator(baseCompile)


(function() {
	with(this) {
		return _c('div', {
			attrs: {
				"id": "editor"
			}
		}, [_c('p', [_v(_s(answer))]), _v(" "), _c('textarea', {
			domProps: {
				"value": input
			},
			on: {
				"input": update
			}
		}), _v(" "), _c('div', {
			domProps: {
				"innerHTML": _s(compiledMarkdown)
			}
		})])
	}
})