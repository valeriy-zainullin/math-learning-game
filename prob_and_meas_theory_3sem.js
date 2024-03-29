let prob_and_meas_theory_3sem = [
	// Надо сначала полностью отсмотреть лекцию, а потом только писать сюда.

	// Билет 1. Вероятностное пространство как математическая модель случайного эксперимента.
	//   Статистическая устойчивость.

	// Билет 3. Геометрические вероятности. Задача “о встрече”.

	// Билет 4. Условная вероятность. Формулы полной вероятности и Байеса.

	// Билет 5. Независимость событий, виды и взаимосвязь.

	// Билет 6. Случайные величины. Независимость случайных величин. Распределение. Примеры.
	//   Математическое ожидание, дисперсия, ковариация, корреляция. Свойства.

	// Определение математического ожидания.

	// Свойства математического ожидания.

	// Определение дисперсии.

	// Свойства дисперсии.

	// Определение ковариации.

	// Свойства ковариации.

	// Определение корреляции.

	// Свойства корреляции.

	// Билет 7. Схема испытаний Бернулли. Математическая модель, теорема Пуассона.

	// Лекция 4.

	// Теорема Пуассона.

	// Билет 8. Неравенства Маркова и Чебышева. Закон больших чисел. Центральная предельная
	//   теорема (б/д).

	// Билет 9. Системы множеств (полукольца, кольца, алгебры, сигма-алгебры). Примеры.
	//   Минимальное кольцо, содержащее полукольцо. Понятие наименьшего кольца,
	//   алгебры, сигма-алгебры, содержащей систему множеств. Борелевская сигма-алгебра
	//   на прямой.

	// Лекция 6.
	[
		"Определение полукольца",
		["Пусть", "$S$", "--", "система", "множеств", ";", "$S$", "называется", "полукольцом", ",",
			"если", "$\\varnothing \\in S$", ",", "$A, B \\in S \\rightarrow A \\cap B \\in S$",
			"(замкнуто относительно пересечения)", ",",
			"$A_1, A \\in S, A_1 \\subseteq A \\rightarrow \\exists A_2, \\ldots, A_n \\in S: A = \\bigsqcup_{i = 1}^n A_i$",
			"(любое подмножество элемента можно дополнить другими элементами до разбиения элемента)"
		]
	],

	// Определение кольца
	[
		"Определение кольца",
		["Пусть", "$R$", "--", "множество", ";", "$R$", "называется", "кольцом", ",",
			"если", "$R \\neq \\varnothing$", ",",
			"$(\\forall A, B \\in R) A \\cap B \\in R \\land A \\triangle B \\in R$",
			"(замкнуто относительно пересечения и симметрической разности, они выступают в качестве умножения и сложения)"
		]
	],

	// Определение алгебры.
	[
		"Определение алгебры",
		["Пусть", "$R$", "--", "множество", ";", "$R$", "называется", "кольцом", ",",
			"если", "$R \\neq \\varnothing$", ",",
			"$(\\forall A, B \\in R) A \\cap B \\in R \\land A \\triangle B \\in R$",
			"(замкнуто относительно пересечения и симметрической разности, они выступают в качестве умножения и сложения)"
		]
	],

	// Определение сигма-алгебры.

	// Определение дельта-алгебры.

	// Связь сигма-алгебры с дельта-алгеброй

	// Билет 10. Меры на полукольцах. Классическая мера Лебега на полукольце промежутков и ее
	//   сигма-аддитивность.

	// Билет 11. Продолжение меры с полукольца на минимальное кольцо. Наследование
	//   сигма-аддитивности при продолжении меры. Внешняя мера Лебега. Мера Лебега. Свойства.
	//   Сигма-алгебра измеримых по Лебегу множеств. Сигма-аддитивность меры Лебега на
	//   сигма-алгебре измеримых по Лебегу множеств.

	// Лекция 8.

	// Лемма о полуаддитивности меры на полукольце (нужна ли в самом билете?) Всё равно изучать буду, т.к. давали.
	[
		"Лемма о полуаддитивности меры на полукольце",
		["Если", "$S$", "--", "полукольцо", ",", "$m$", "--", "мера", "на", "$S$", ",",
			"$A, A_1, \\ldots, A_n \\in S$", ",", "$A \\subseteq \\bigcup_{i = 1}^n A_i$", ",",
			"то", "$m(A) \\leqslant \\sum_{i = 1}^n m(A_i)$"
		]
	],

	// Теорема о функции меры на минимальном кольце

	// Теорема о наследовании сигма-аддитивности при продолжении меры на минимальное кольцо

	// Теорема о сигма-полуаддитивности сигма-аддитивной меры.

	// Определение внешней меры Лебега

	// Пример о том, что внешняя мера Лебега не мера.

	// Замечание о совпадении на минимальном кольце внешней меры с мерой.

	// Замечание о том, что в определении внешней меры можно брать покрытие непересекающимися множествами.

	// Замечание о том, что мера полуаддитивна на подмножествах (кого)...

	// Теорема о полуаддитивности сигма-аддитивной внешней меры.

	// ...

	// Одну лекцию долго пишу, но формулировки будут очень короткие, а доказательства очень короткие и приятные :)


	// Билет 12. Структура измеримых множеств. Теорема Каратеодори.

	// Лекция 11.

	// Теорема о структуре измеримых множеств

	// Теорема Каратеодори.
	[
		"Теорема Каратеодори",
		["Если", "$S$", "--", "полукольцо", "с", "единицей", ",", "$m$", "--",
			"$\\sigma$-конечная", "мера", "на", "$S$", ",", "то", "существует",
			"единственная", "$\\sigma$-конечная", "мера", "на", "$\\sigma(S)$",
			"(минимальная сигма-алгебра, содержащая $S$)", "$\\mu_0$", ",",
			"согласованная", "с", "$m$", ",", "т.е.",
			"$(\\forall A \\in S) \\ \\mu_0(A) = m(A)$"
		]
	],



	// Билет 13. Полнота и непрерывность мер. Теоремы о связи непрерывности и
	//   сигма-аддитивности.

	// Билет 14. Мера Бореля. Меры Лебега-Стилтьеса на прямой и ее сигма-аддитивность.

	// Билет 15. Сигма-конечные меры.

	// Билет 16. Неизмеримые множества.

	// Билет 17. Измеримые функции. Их свойства. Измеримые функции и предельный переход.

	// Билет 18. Множество Кантора и кривая Кантора. Теорема о существовании композиции
	//   измеримой от непрерывной, не являющейся измеримой функцией. Неполнота меры Бореля.

	// Билет 19. Общее понятие вероятностного пространства, случайной величины на нем.
	//   Понятие распределения случайной величины и распределения. Понятие функции
	//   распределения случайной величины и функции распределения. Доказательство свойств
	//   функции распределения.

	// Билет 20. Сходимость по мере и почти всюду. Их свойства (арифметические, связь
	//   сходимостей, теорема Рисса).

	// Билет 21. Теорема Егорова.

	// Билет 22. Интеграл Лебега для простых функций и его свойства. Определение интеграла
	//   Лебега в общем случае. Основные свойства интеграла Лебега.

	// Билет 23. Теоремы о предельном переходе под знаком интеграла Лебега.
	// Написать по памяти из матана. Привести к виду, как нам давали. Мб там для произвольной сигма-алгебры и т.п.

	// TODO: попробовать

	// Билет 2. Дискретное вероятностное пространство. Классическая вероятность. Построение
	//   простейших вероятностных пространств. Элементы комбинаторики. Вероятность суммы событий.
	[
		"Определение вероятностного пространства",
		["Вероятностное", "пространство", "--", "это", "тройка", "$(\\Omega, F, P)$", ":",
			"$\\Omega$"
		]
	],


	// Пусть

	// Лекция 7.
	[
		"Лемма о ... (не знаю пока, как назвать)",
		["Если", "$S$", "--", "полукольцо", ",", "$A, A_1, \\ldots, A_k \\in S$", ",",
			"$\\bigsqcup\\limits_{i = 1}^k A_i \\subseteq A$", ",", "то",
			"$\\exists A_{k + 1}, \\ldots, A_n \\in S: A = \\bigsqcup\\limits_{i = 1}^n A_i$"
		]
	],

	// Можно ещё формальнее, наверно, записать определение в { ... } -- через аксиому
	//   выделения. Чтобы они её отражали.
	[
		"Теорема о структуре минимального кольца",
		["Если", "$S$", "--", "полукольцо", ",", "$R(S)$", "--", "минимальное", "кольцо",
			",", "тогда",
			"$R(S) = K(S) = \\left\\{ \\bigsqcup_{i = 1}^n A_i : A_1, \\ldots, A_n \\in S, A_i \\cup A_j = \\varnothing \\right\\}$",
			";", "по-другому", "$K(S)$", "--", "это", "всевозможные", "конечные", "дизъюнктные", "объединения",
			"элементов", "кольца", "$S$"
		]
	],


];