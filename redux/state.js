export default {
  // TODO: read saved problems sets from local app storage
  problemSets: [
    {
      title: 'GNU/Linux trivia',
      description: 'A sample problem set on fun facts about GNU/Linux, used for demonstrating the app only',
      problems: [
        {
          question: 'What is Linux?',
          answers: [
            'An operating system kernel',
            'A fully functioning operating system',
            'A brand of potato chips',
            'A top secret project under development by Microsoft'
	  ]
	},
        {
          question: 'What license is Linux released under?',
          answers: [
            'GPLv2 only',
            'GPLv2 or later',
            'GPLv3 or later',
            '3-clause BSD license'
	  ]
	},
        {
          question: 'Who founded the GNU project and when?',
          answers: [
            'Richard Stallman, in the year 1983',
            'Linus Torvalds, in the year 1991',
	    'Bill Gates, in the year 1975',
	    'Steve Jobs, in the year 1976'
	  ]
	}
      ]
    },
    {
      title: 'Essentials of Linux system administration',
      description: 'A sample problem set featuring common questions on Linux system administration, used for demonstration purposes for this app',
      problems: [
        {
          question: 'What command outputs the name of the kernel (Linux) only?',
          answers: [
            'uname -s',
            'uname -r',
            'uname -m',
            'kernel --name'
	  ]
	}
      ]
    }
  ]
}
