const { Schema, model } = require('mongoose')

const profileSchema = new Schema({

    user_id: {
        type: String
    },
    /* Agora */

    outcome: {
        outcome1: {
            generalcomment: {
                type: String,

            },
            techcomment: {
                type: String,

            },
            aprove: {
                type: Boolean,
                default: true,
            }
        },
        outcome2: {
            generalcomment: {
                type: String,

            },
            techcomment: {
                type: String,

            },
            aprove: {
                type: Boolean,
                default: true,
            }
        },
        outcome3: {
            generalcomment: {
                type: String,

            },
            techcomment: {
                type: String,

            },
            aprove: {
                type: Boolean,
                default: true,
            }
        },
        outcome4: {
            generalcomment: {
                type: String,

            },
            techcomment: {
                type: String,

            },
            aprove: {
                type: Boolean,
                default: true,
            }
        },
        outcome5: {
            generalcomment: {
                type: String,

            },
            techcomment: {
                type: String,

            },
            aprove: {
                type: Boolean,
                default: true,
            }
        },
        outcome6: {
            generalcomment: {
                type: String,

            },
            techcomment: {
                type: String,

            },
            aprove: {
                type: Boolean,
                default: true,
            }
        },
    },

    badges: {
        badges1: {
            aprove: {
                type: Boolean,
                default: true,
            }
        },
        badges2: {
            aprove: {
                type: Boolean,
                default: true,
            }
        },
        badges3: {

            aprove: {
                type: Boolean,
                default: true,
            }
        },
        badges4: {

            aprove: {
                type: Boolean,
                default: true,
            }
        },
        badges5: {
            aprove: {
                type: Boolean,
                default: true,
            }
        },
    },

    /* fin Agora */

    /* mentoria */

    gender: {
        type: Number,
    },

    mentorAssigment: {
        type: String,
    },

    prev_studes: {
        type: String,
    },

    actualAge: {
        type: Number,
    },
    sesiones: {
        type: Number,
    },

    interest: {
        type: Array,
        require: true
    },

    /* fin mentoria */

    /* Social Programate */

    experience: {
        type: 'string',
        trim: true,
        lowercase: true
    },
    description: {
        type: 'string',
        trim: true,
        lowercase: true
    },
    github: {
        type: 'string',
        trim: true,
        lowercase: true
    },
    softSkills: {
        type: 'string',
        trim: true,
        lowercase: true

    },
    technicalSkills: {
        type: 'string',
        trim: true,
        lowercase: true
    },

    /* fin social programate */

    /* Proceso de seleccion */
    documentType: {
        type: Number,
    },
    documentNumber: {
        type: Number,

        minlength: 6
    },
    documentPdf: {
        type: String,
    },
    secondContactNumber: {
        type: Number,
    },
    nacionality: {
        type: String,
    },
    residencyDepartment: String,
    municipalityOfResidency: String,
    locationInBogota: String,
    socioeconomicStratus: {
        type: Number,
    },
    migrant: {
        type: Boolean,
    },
    livesInColombia: {
        type: Boolean,
    },
    address: {
        type: String,

        maxlength: 45
    },
    dateOfBirth: {
        type: Date,
    },
    birthdayOnFormation: Date,

    maritalStatus: {
        type: Number,
    },
    academicLevel: {
        type: Number,
    },
    degreeTitle: {
        type: String,
        maxlength: 45
    },
    currentOccupation: {
        type: Number,
    },
    unemployedTime: String,
    formalOccupation: {
        type: Boolean,

        maxlength: 45
    },
    victimArmedConflict: {
        type: Boolean,
    },
    pcAccess: {
        type: Boolean,
    },
    programataPrevoiousTimes: {
        type: Number,
    },
    motivation: {
        type: String,

        maxlength: 300
    },
    dreams: {
        type: String,

        maxlength: 300
    },
    soloLearnProfile: {
        type: Number,
        minlength: 6
    },
    status: {
        registered: { type: Boolean },
        waitList: { type: Boolean },
        withCitation: { type: Boolean },
        booked: { type: Boolean },
        interviewed: { type: Boolean },
        pass: { type: Boolean },
        noPass: { type: Boolean }
    },
    heardFromUs: {
        radio: Boolean,
        instagram: Boolean,
        facebook: Boolean,
        web: Boolean
    },
    convocatoria: String,
    resultados: Number,
    fechaEntrevista: Date,
    urlPrueba: String,
    promedioEntrevista: Number,
    /* fin proceso seleccion  */

})

profileSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v

    }
})

const Profile = model('Profile', profileSchema)

module.exports = Profile


