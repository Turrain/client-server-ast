module.exports = {
    apps: [
      {
        name: 'go-ast-bridge',
        cwd: '../go-ast-bridge',
        script: 'go',
        args: 'run .',
        watch: true,
      },
      {
        name: 'go-ast-backend',
        script: 'bun',
        args: 'run src/app.ts',
        cwd: '../go-ast-backend',
        watch: true,
      },
      {
        name: 'go-ast-intf',
        script: 'bun',
        args: 'run dev',
        cwd: '../go-ast-intf',
        watch: false,
      },
      {
        name: 'go-ast-tts',
        script: './venv/bin/python',
        args: 'src/main.py',
        cwd: '../go-ast-tts',
        watch: true,
      },
      {
        name: 'go-ast-whisper',
        script: './venv/bin/python',
        args: 'src/main.py',
        cwd: '../go-ast-whisper',
        watch: true,
      }
    ]
  };