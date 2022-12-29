// Code style: предложения и словосочетания в скобочках являются целым словом, они не должны быть длинными, от двух до пяти слов.
//   В запятые не входят пробелы. В интерфейсе и так пространство есть.
//   В определениях для предположений используется "пусть", а в утверждениях "если",
//   поскольку "если", как мне кажется, меньше нагружает текст, чем пусть, но при этом оно
//   не подходит для определений.
//   Математика отделяется в слова по кванторам. Потому вокруг кванторов скобочки.
//   По квантору принадлежности разделения нет. Разделение по кванторам существования и всеобщности
//   Поскольку единицы запоминания в формулировках -- кусочки математики, которые вставляем, по смыслу, как это написать.
//   А в кванторных утверждениях то, как они идут по порядку, потому там делю.
// Корректность определения интеграла для множества бесконечной меры. Могут спросить, когда попросят определение интеграла Лебега.
let analysis_3sem = [
	// Определение интеграла Лебега для ограниченных функций
	// Определение интеграла Лебега для неотрицательных функций
	// Определение интеграла Лебега для произвольных функций
	[
		"Основная теорема об интеграле Лебега от ограниченных функций",
		["если", "мера", "$E$", "конечна", ",", "$f$", "измерима", "и", "ограничена",
			"на", "$E$", ",", "тогда", "$f$", "интегрируема", "по", "Лебегу", "на", "$E$", "и",
			"$\\int\\limits_E f(x) d\\mu(x) = \\lim\\limits_{\\Delta(Q) \\to 0} S(Q, f, \\{ t_i \\})$",
			"(интеграл равен пределу интегральных сумм)",
			";", "равенство", "означает", ",", "что", "выполнено", "утверждение",
			"$(\\forall \\varepsilon > 0)$", "$(\\exists \\delta > 0)$",
			"$(\\forall Q, \\Delta(Q) < \\delta)$",
			"$(\\forall \\{ t_i \\}, t_i \\in E_i)$",
			"$\\left| \\int\\limits_E f(x) d\\mu(x) - \\sum\\limits_{i = 1}^n f(t_i) \\mu(E_i) \\right| < \\varepsilon$"
		]
	],
	[
		"Основная теорема об интеграле Лебега от неограниченных неотрицательных функций",
		["если", "мера", "$E$", "конечна", ",", "$f$", "измеримая", ",", "неограниченная",
			"и", "неотрицательная", "на", "$E$", ",", "тогда", "$f$", "интегрируема", "по",
			"Лебегу", "на", "$E$", "и",
			"$\\int\\limits_E f(x) d\\mu(x) = \\lim\\limits_{\\Delta(Q) \\to 0} S(Q, f, \\{ t_i \\})$",
			"(интеграл равен пределу интегральных сумм)"
		]
	],
	[
		"Линейность интеграла Лебега",
		["если", "мера", "$E$", "конечна", ",", "$f_1$", "и", "$f_2$", "суммируемы", "на",
			"$E$", ",", "$c_1, c_2 \\in \\mathbb{R}$", ",", "тогда",
			"$с_1 f_1 + c_2 f_2$", "тоже", "суммируема", "на", "$E$", "и",
			"$\\int\\limits_E (c_1 f_1(x) + c_2 f_2(x)) d\\mu(x) = c_1 \\int\\limits_E f_1(x) d\\mu(x) + c_2 \\int\\limits_E f_2(x) d\\mu(x)$"
		]
	],
	[
		"Монотонность интеграла Лебега",
		["если", "мера", "$E$", "конечна", ",", "$f_1$", "и", "$f_2$", "суммируемы", "на",
			"$E$", ",", "$(\\forall x \\in E)$", "$f_1(x) \\leqslant f_2(x)$", ",", "тогда",
			"$\\int\\limits_E f_1(x) d\\mu(x) \\leqslant \\int\\limits_E f_2(x) d\\mu(x)$"
		]
	],

	// Лекция 4.

	[
		"Теорема Лебега о переходе к пределу в интеграле Лебега",
		["если", "мера", "$E$", "конечна", ",", "$\\{f_n\\}_{n = 1}^\\infty$", "измеримы",
			"на", "$E$", ",", "$\\lim\\limits_{n \\to \\infty} f_n(x) = f(x)$",
			"почти", "всюду", "на", "$E$", "(поточечный предел почти всюду)", ",",
			"$|f_n(x)| \\leqslant F(x)$", "почти", "всюду", "на", "$E$", "для", "любого",
			"$n \\in \\mathbb{N}$", ",", "$F$", "суммируема", "на", "$E$", ",", "тогда",
			"$f$", "суммируема", "на", "$E$", "и",
			"$\\lim\\limits_{n \\to \\infty} \\int\\limits_E f_n(x) d\\mu(x) = \\int\\limits_E f(x) d\\mu(x)$"
		]
	],
	[
		"Теорема Леви о монотонной сходимости",
		["если", "мера", "$E$", "конечна", ",", "$\\{f_n\\}_{n = 1}^\\infty$", "измеримы", "и", "неотрицательны",
			"на", "$E$", ",", "$\\{f_n(x)\\}_{n = 1}^\\infty$", "неубывающая", "почти", "всюду", "на",
			"$E$", ",", "тогда",
			"$\\int\\limits_E \\lim\\limits_{n \\to \\infty} f_n(x) d\\mu(x) = \\lim\\limits_{n \\to \\infty} \\int\\limits_E f_n(x) d\\mu(x)$"
		]
	],
	[
		"Теорема Фату",
		["если", "мера", "$E$", "конечна", ",", "$\\{f_n\\}_{n = 1}^\\infty$", "измеримы",
			"на", "$E$", ",", "$\\lim\\limits_{n \\to \\infty} f_n(x) = f(x)$", "почти",
			"всюду", "на", "$E$", ",", "$f_n(x) \\geqslant 0$", "для", "любого",
			"$n \\in \\mathbb{N}$", "почти", "всюду", "на", "$E$", ",", "тогда",
			"$\\int\\limits_E f(x) d\\mu(x) \\leqslant \\underline{\\lim}\\limits_{n \\to \\infty} \\int\\limits_E f_n(x) d\\mu(x)$"
		]
	],
	// Вспомнить для себя определения понятий предела множества.
	[
		"Корректность определения интеграла Лебега по множеству бесконечной меры",
		["если", "$\\mu(E) = +\\infty$", ",", "$f$", "измерима", "и", "неотрицательна",
			"на", "$E$", ",", "тогда", "для", "любых", "двух", "неубывающих",
			"последовательностей", "множеств", "конечной", "меры",
			"$\\{ E_n \\}_{n = 1}^\\infty$", ",", "$\\{ E_n' \\}_{n = 1}^\\infty$", ",",
			"для", "которых",
			"$\\lim\\limits_{n \\to \\infty} E_n = \\lim\\limits_{n \\to \\infty} E'_n = E$",
			",", "верно", ",", "что",
			"$\\lim\\limits_{n \\to \\infty} \\int\\limits_{E_n} f(x) d\\mu(x) = \\lim\\limits_{n \\to \\infty} \\int\\limits_{E'_n} f(x) d\\mu(x)$"
		]
	],
	[
		"Определение подграфика",
		["пусть", "$f$", "неотрицательна", "на", "$E$", ";",
			"подграфиком", "$f$", "на", "$E$", "называется", "множество",
			"$D_{f, E} = \\{ (x, y) \\mid x \\in E, y \\in [0, f(x)] \\}$"
		]
	],
	[
		"Лемма о мере подграфика",
		["если", "$E$", "измеримо", ",", "$f$", "суммируемая", "и", "неотрицательная",
			"на", "$E$", ",", "тогда", "её", "подграфик", "измерим", "на", "$E$", "и",
			"$\\mu\\left(D_{f, E}\\right) = \\int\\limits_E f(x) d\\mu(x) = \\int\\limits_{[0, +\\infty]} \\mu_X(\\{ x \\mid f(x) \\geqslant y \\}) d\\mu_Y(y)$",
			",", "здесь", "$X = \\mathbb{R}^n$", ",", "$Y = \\mathbb{R}^m$", ",", "$\\mu_T(A)$", "--", "мера", "Лебега", "множества", "$A$", "для", "$T$"
		]
	],
	[
		"Теорема Фубини",
		["если", "$E$", "измеримо", ",", "$f$", "суммируемая", "на", "$E$", ",", "тогда",
			"её", "подграфик", "измерим", "на", "$E$", "и",
			"$\\mu\\left(D_{f, E}\\right) = \\int\\limits_E f(x) d\\mu(x) = \\int\\limits_{[0, +\\infty]} \\mu_X(\\{ x \\mid f(x) \\geqslant y \\}) d\\mu_Y(y)$",
			",", "здесь", "$X = \\mathbb{R}^n$", ",", "$Y = \\mathbb{R}^m$"
		]
	],

	// Лекция 9.

	[
		"Определение полиномиальной формы",
		["пусть", "$E = \\mathbb{R}^n$", ",", "$E^*$", "--", "сопряженное", "пространство",
			"к", "$E$",
			"(т.е. пространство линейных функционалов, форм, т.е. линейных отображений из $E$ в $\\mathbb{R}$)",
			";", "отображение", "$U: E^p \\times {\\left( E^* \\right)}^p \\to \\mathbb{R}$",
			"называется", "полилинейной формой", ",", "если", "линейно", "по", "каждому",
			"из", "своих", "аргументов",
			"(например, по первому, т.е. для любых $\\alpha, \\beta \\in \\mathbb{R}$ $U\\mathopen{}\\left(\\alpha x_1' + \\beta x_2'', x_2, \\ldots, x_p; y^1, \\ldots, y^q) = \\alpha U(x_1', x_2, \\ldots, x_p; y^1, \\ldots, y^q\\right) + \\beta U\\mathopen{}\\left(x_1'', x_2, \\ldots, x_p; y^1, \\ldots, y^q\\right)\\mathclose{}\\mathclose{}$)"
		]
	],

	[
		"Утверждение о соответствии полилинейной формы значениям на базисных элементах",
		["если", "$U: E^p \\times {\\left( E^* \\right)}^q \\to \\mathbb{R}$", "--", "полилинейная",
			"форма", ",", "$e_1, \\ldots, e_n$", "--", "базис", "$E$", ",",
			"$e^1, \\ldots, e^n$", "--", "двойственный", "базис", "к", "$e_1, \\ldots, e_n$",
			"($e^j(e_i) = \\delta_{ij}$ -- символ Кронекера, равный $1$, если $i = j$, и $0$ иначе)",
			",", "тогда", "$U$", "однозначно", "определяется", "своими", "значениями", "на",
			"базисных", "элементах", ",", "т.е.", "числами",
			"$w_{i_1 \\ldots i_p}^{j_1 \\ldots j_q} = U\\mathopen{}\\left(e_{i_1}, \\ldots, e_{i_p}; e^{j_1}, \\ldots, e^{j_q}\\right)\\mathclose{}$",
			",", "$(i_1, \\ldots, i_p) \\in {\\{1, \\ldots, n \\}}^p$", ",",
			"$(j_1, \\ldots, j_q) \\in {\\{1, \\ldots, n\\}}^q$"
		]
	],

	// Чтобы привыкнуть писать не в теоремах, а в вычислениях, и немного поработать с ними.
	[
		"Разминка на тензоры",
		["возьмём", "$E = \\mathbb{R}^2$", ",",
			"$U: E^p \\times {\\left( E^* \\right)}^q \\to \\mathbb{R}$", ",",
			"базис", "$e_1 = (1, 0)$", ",", "$e_2 = (0, 1)$", ",", "двойственный", "базис",
			"$e^1(v) = v_1$", ",", "$e^2(v) = v_2$", ";",
			"$U\\mathopen{}\\left(x_1; x^1\\right)\\mathclose{} = x^1(x_1)$", ",",
			"$w_{1,1} = U\\mathopen{}\\left(e_1; e^1\\right)\\mathclose{} = 1$", ",",
			"$w_{1,2} = U\\mathopen{}\\left(e_1; e^2\\right)\\mathclose{} = 0$", ",",
			"$w_{2,1} = U\\mathopen{}\\left(e_2; e^1\\right)\\mathclose{} = 0$", ",",
			"$w_{2,2} = U\\mathopen{}\\left(e_2; e^2\\right)\\mathclose{} = 1$"
		]
	],

	[
		"Определение тензора",
		["пусть", "$U: E^p \\times {\\left( E^* \\right)}^q \\to \\mathbb{R}$", "--",
			"полилинейная", "форма", "$e_1, \\ldots, e_n$", "--", "базис", "$E$", ";",
			"тензором", "полилинейной", "формы", "$U$", "называется", "набор", "чисел",
			"$w_{\\vec{i}}^{\\vec{j}}$", "по", "всем", "$\\vec{i} \\in {(1, \\ldots, n)}^p$",
			"$\\vec{j} \\in {(1, \\ldots, n)}^p$", "из", "утверждения", "о", "соответствии",
			"полилинейной", "формы", "значениям", "на", "базисных", "элементах",
			"(т.е. это координаты полилинейной формы в некотором базисе)"
		]
	],
]