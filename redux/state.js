export default {
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
	},
	{
          question: 'Which of the following systems are based on a Linux kernel?',
          answers: [
            'ChromeOS',
            'FreeBSD',
            'Windows',
            'Solaris'
	  ]
	},
	{
          question: 'What was the kernel originally planned to be used within the GNU project?',
          answers: [
            'Hurd',
            'kFreeBSD',
            'Linux',
            'XNU'
	  ]
	},
	{
          question: 'Which OS did Linus Torvalds say will become the future of the Linux desktop?',
          answers: [
            'ChromeOS',
            'Ubuntu',
            'RHEL',
            'SLES/SLED'
	  ]
	},
	{
          question: 'Which Linux distribution is widely regarded as "Linux for human beings"?',
          answers: [
            'Ubuntu',
            'Debian',
            'Slackware',
            'CentOS'
	  ]
	},
	{
          question: 'Which Linux distribution has the most downstream distributions?',
          answers: [
            'Debian',
            'Ubuntu',
            'Arch',
            'Manjaro'
	  ]
	},
	{
          question: 'Which Linux distribution is the oldest active distribution?',
          answers: [
            'Slackware',
            'Gentoo',
            'Debian',
            'Fedora'
	  ]
	},
	{
          question: 'Name a co-founder of the CentOS Project.',
          answers: [
            'Gregory Kurtzer',
            'Satya Nadella',
            'Mark Shuttleworth',
            'Mark Zuckerberg'
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
	},
	{
          question: 'Which directory stores system-wide configuration files in an FHS-compliant system?',
          answers: [
            '/etc',
            '/config',
            '/bin',
            '/home'
	  ]
	},
	{
          question: 'Which command shows the memory available in the system?',
          answers: [
            'free',
            'freemem',
            'memory',
            'free-memory'
	  ]
	},
	{
          question: 'Which of these is a pseudo-filesystem?',
          answers: [
            'procfs',
            'ext4',
	    'xfs',
            'NTFS'
	  ]
	},
	{
          question: 'What is the main benefit of a journaling filesystem and why?',
          answers: [
            'Difficult to corrupt due to atomic transactions',
            'Difficult to corrupt due to automatic snapshots',
            'Large maximum file size due to large chunk size',
            'Large maximum file size due to 64-bit addressing'
	  ]
	},
	{
          question: 'Which of these is a containerization technology?',
          answers: [
            'Docker',
            'KVM',
            'libvirt',
            'Hyper-V'
	  ]
	},
	{
          question: 'How to change the permissions of a file myfile.txt to have user read-write permissions, group read permissions and other read permissions?',
          answers: [
            'chmod 644 myfile.txt',
            'chown 644 myfile.txt',
            'chmod u=rwx,g=rw,o=rw myfile.txt',
            'chown u=rwx,g=rw,o=rw myfile.txt'
	  ]
	},
	{
          question: 'What package format is used by Debian-based distributions?',
          answers: [
            'dpkg',
	    'rpm',
	    'pkg',
            'dmg'
	  ]
	},
	{
          question: 'What package format is used by Red Hat-based distributions?',
          answers: [
            'rpm',
            'dpkg',
            'exe',
            'pkg'
	  ]
	},
	{
          question: 'What is the most widely used init system in Linux distributions as of 2021?',
          answers: [
            'systemd',
            'SysVInit',
            'OpenRC init',
            'launchd'
	  ]
	}
      ]
    }
  ]
}
