let questionIndex = 0;
var tensor = [];

const model = tf.sequential();
const test = document.getElementById('test');
const answerOptions = document.querySelectorAll('.answer');
const questionText = document.getElementById('question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const eText = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');
const startBtn = document.getElementById('start');

const testData = [
  {
    question:
      'If one of us apologizes when our discussion deteriorates, the discussion ends.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'I know we can ignore our differences, even if things get hard sometimes.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'When we need it, we can take our discussions with my spouse from the beginning and correct it.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'When I discuss with my spouse, to contact him will eventually work.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'The time I spent with my wife is special for us.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "We don't have time at home as partners.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'We are like two strangers who share the same environment at home rather than family.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I enjoy our holidays with my wife.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I enjoy traveling with my wife.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'Most of our goals are common to my spouse.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'I think that one day in the future, when I look back, I see that my spouse and I have been in harmony with each other.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'My spouse and I have similar values in terms of personal freedom.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'My spouse and I have similar sense of entertainment.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'Most of our goals for people (children, friends, etc.) are the same.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'Our dreams with my spouse are similar and harmonious.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "We're compatible with my spouse about what love should be.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'We share the same views about being happy in our life with my spouse.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'My spouse and I have similar ideas about how marriage should be.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'My spouse and I have similar ideas about how roles should be in marriage.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'My spouse and I have similar values in trust.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I know exactly what my wife likes.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'I know how my spouse wants to be taken care of when she/he sick.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I know my spouse's favorite food.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'I can tell you what kind of stress my spouse is facing in her/his life.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I have knowledge of my spouse's inner world.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I know my spouse's basic anxieties.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I know what my spouse's current sources of stress are.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I know my spouse's hopes and wishes.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I know my spouse very well.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I know my spouse's friends and their social relationships.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I feel aggressive when I argue with my spouse.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'When discussing with my spouse, I usually use expressions such as ‘you always’ or ‘you never’.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      "I can use negative statements about my spouse's personality during our discussions.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I can use offensive expressions during our discussions.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I can insult my spouse during our discussions.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I can be humiliating when we discussions.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'My discussion with my spouse is not calm.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I hate my spouse's way of open a subject.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'Our discussions often occur suddenly.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "We're just starting a discussion before I know what's going on.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'When I talk to my spouse about something, my calm suddenly breaks.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      "When I argue with my spouse, ı only go out and I don't say a word.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I mostly stay silent to calm the environment a little bit.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "Sometimes I think it's good for me to leave home for a while.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I'd rather stay silent than discuss with my spouse.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      "Even if I'm right in the discussion, I stay silent to hurt my spouse.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      'When I discuss with my spouse, I stay silent because I am afraid of not being able to control my anger.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'I feel right in our discussions.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I have nothing to do with what I've been accused of.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question:
      "I'm not actually the one who's guilty about what I'm accused of.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I'm not the one who's wrong about problems at home.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I wouldn't hesitate to tell my spouse about her/his inadequacy.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: 'When I discuss, I remind my spouse of her/his inadequacy.',
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
  {
    question: "I'm not afraid to tell my spouse about her/his incompetence.",
    never: {
      answer: 'Never',
      value: 0,
    },
    seldom: {
      answer: 'Seldom',
      value: 1,
    },
    averagely: {
      answer: 'Averagely',
      value: 2,
    },
    frequently: {
      answer: 'Frequently',
      value: 3,
    },
    always: {
      answer: 'Always',
      value: 4,
    },
  },
];

function questionsCounter() {
  const questionsSpan = document.querySelector('#questionCounter');
  let totalQuestionsStr =
    '<p class="pr-1">' +
    (questionIndex + 1) +
    '</p>Of <p class="pl-1 pr-1">' +
    testData.length +
    '</p> Questions';

  questionsSpan.innerHTML = totalQuestionsStr;
}

function loadTest() {
  deselectAnswers();
  questionsCounter();

  const currentQuestionData = testData[questionIndex];
  questionText.innerText = currentQuestionData.question;

  aText.innerText = currentQuestionData.never.answer;
  bText.innerText = currentQuestionData.seldom.answer;
  cText.innerText = currentQuestionData.averagely.answer;
  dText.innerText = currentQuestionData.frequently.answer;
  eText.innerText = currentQuestionData.always.answer;
}

function getSelected() {
  let selectedAnswer = undefined;

  answerOptions.forEach((answerOption) => {
    if (answerOption.checked) {
      selectedAnswer = answerOption.id;
    }
  });

  const currentQuestionData = testData[questionIndex];

  switch (selectedAnswer) {
    case 'never':
      selectedAnswer = currentQuestionData.never.answer;
      tensor.push(currentQuestionData.never.value);
      break;
    case 'seldom':
      selectedAnswer = currentQuestionData.seldom.answer;
      tensor.push(currentQuestionData.seldom.value);
      break;
    case 'averagely':
      selectedAnswer = currentQuestionData.averagely.answer;
      tensor.push(currentQuestionData.averagely.value);
      break;
    case 'frequently':
      selectedAnswer = currentQuestionData.frequently.answer;
      tensor.push(currentQuestionData.frequently.value);
      break;
    case 'always':
      selectedAnswer = currentQuestionData.always.answer;
      tensor.push(currentQuestionData.always.value);
      break;
    default:
      selectedAnswer = undefined;
      break;
  }

  return selectedAnswer;
}

function deselectAnswers() {
  answerOptions.forEach((answerOption) => {
    answerOption.checked = false;
  });
}

function restart() {
  location.reload();
}

function divorceOrNot() {
  const testVal = tf.tensor2d([tensor]);
  const prediction = model.predict(testVal);
  const pIndex = prediction.dataSync();

  console.log('Predict: ' + pIndex);

  if (pIndex > 0.5) {
    test.innerHTML = `
    <h2 class="tagline">So sorry...</h2>
    <div class="d-flex justify-content-center mt-2 mb-2 ml-4 mr-4">
    <p class="bio">
    Apparently the relationship with your partner is not going very well. Don't worry, divorce is not as bad as you think. If you want to know more about divorce, we recommend this page:
    <a href="https://sasforwomen.com/36-things-to-do-if-you-are-thinking-about-divorce/" target="blank">36 Things to Do If You Are Thinking About Divorce</a> 
    </p>
    </div>

    <div class="d-flex justify-content-center mt-1 mb-5">
    <button id="restart" class="btn btn-light mt-1 font-weight-bold" onclick='restart()'>Restart</button>
    </div>
  `;
  } else {
    test.innerHTML = `
    <h2 class="tagline">Congratulations!</h2>
    <div class="d-flex justify-content-center mt-2 mb-2 ml-4 mr-4">
    <p class="bio">
    It seems that you have some small problems as a couple but nothing serious. We congratulate you for being such good people and respecting each other. Here's a site with tips that can make your relationship even better: 
    <a href="https://www.brides.com/story/pieces-of-best-marriage-advice-ever-collected-over-years" target="blank">6 Best Pieces of Marriage Advice for Couples</a> 
    </p>
    </div>

    <div class="d-flex justify-content-center mt-1 mb-5">
    <button id="restart" class="btn btn-light mt-1 font-weight-bold" onclick='restart()'>Restart</button>
    </div>
  `;
  }
}

submitBtn.addEventListener('click', () => {
  const selectedAnswer = getSelected();

  if (selectedAnswer != undefined) {
    questionIndex++;

    if (questionIndex < testData.length) {
      loadTest();
    } else {
      divorceOrNot();
    }
  } else {
    alert('You have to select an option');
  }
});

async function loadModel() {
  const csvUrl = 'divorce.csv';
  const trainingData = tf.data.csv(csvUrl, {
    columnConfigs: {
      Class: {
        isLabel: true,
      },
    },
  });

  const numOfFeatures = (await trainingData.columnNames()).length - 1;
  const numOfSamples = 170;
  const convertedData = trainingData
    .map(({ xs, ys }) => {
      const labels = [ys.Class == 1, ys.Class == 0];
      return { xs: Object.values(xs), ys: Object.values(labels) };
    })
    .batch(10);

  model.add(
    tf.layers.dense({
      inputShape: [numOfFeatures],
      units: 10,
      activation: 'relu',
    })
  );
  model.add(tf.layers.dense({ units: 10, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

  model.compile({ loss: 'categoricalCrossentropy', optimizer: 'adam' });

  await model.fitDataset(convertedData, {
    epochs: 30,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        console.log('Epoch: ' + epoch + ' Loss: ' + logs.loss);
      },
    },
  });
}

startBtn.addEventListener('click', () => {
  loadTest();
  loadModel();
  startBtn.style.display = 'none';
  document.getElementById('test-box').style.opacity = 1;
});
