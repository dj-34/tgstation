// MARK: Declensions

// Падежи русского языка
/// Именительный: Кто это? Клоун и ассистуха.
#define NOMINATIVE "именительный"
/// Родительный: Откусить кусок от кого? От клоуна и ассистухи.
#define GENITIVE "родительный"
/// Дательный: Дать полный доступ кому? Клоуну и ассистухе.
#define DATIVE "дательный"
/// Винительный: Обвинить кого? Клоуна и ассистуху.
#define ACCUSATIVE "винительный"
/// Творительный: Возить по полу кем? Клоуном и ассистухой.
#define INSTRUMENTAL "творительный"
/// Предложный: Прохладная история о ком? О клоуне и об ассистухе.
#define PREPOSITIONAL "предложный"

/// Макрос для упрощения создания листа падежей для объекта
#define RU_NAMES_LIST_INIT(base, nominative, genitive, dative, accusative, instrumental, prepositional) (list("base" = base, NOMINATIVE = nominative, GENITIVE = genitive, DATIVE = dative, ACCUSATIVE = accusative, INSTRUMENTAL = instrumental, PREPOSITIONAL = prepositional))
