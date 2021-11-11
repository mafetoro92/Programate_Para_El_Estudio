const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const InterviewDaySchema = new Schema(
  {
    user_id: String,
    interview: {
      motivation: {
        question1: {
          title: String,
          score: Number,
          comments: String
        },
        question2: {
          title: String,
          score: Number,
          comments: String
        }
      },
      perseverance: {
        question1: {
          title: String,
          score: Number,
          comments: String
        },
        question2: {
          title: String,
          score: Number,
          comments: String
        }
      },
      planning: {
        question1: {
          title: String,
          score: Number,
          comments: String
        },
        question2: {
          title: String,
          score: Number,
          comments: String
        }
      },
      tecnique: {
        question1: {
          title: String,
          score: Number,
          comments: String
        },
        question2: {
          title: String,
          score: Number,
          comments: String
        }
      }
    },
    assesment: {
      flexibility: {
        question1: {
          title: String,
          score: Number,
          comments: String
        },
        question2: {
          title: String,
          score: Number,
          comments: String
        }
      },
      comunication: {
        question1: {
          title: String,
          score: Number,
          comments: String
        },
        question2: {
          title: String,
          score: Number,
          comments: String
        }
      },
      lidership: {
        question1: {
          title: String,
          score: Number,
          comments: String
        },
        question2: {
          title: String,
          score: Number,
          comments: String
        }
      },
      achievementOrientation: {
        question1: {
          title: String,
          score: Number,
          comments: String
        },
        question2: {
          title: String,
          score: Number,
          comments: String
        }
      }
    },
    interviewScore: Number,
    assesmentScore: Number,
    interviewDayScore: Number
  }
);

const InterviewDay = model('InterviewDay', InterviewDaySchema)

module.exports = InterviewDay

/**
* Paste one or more documents here
*/
