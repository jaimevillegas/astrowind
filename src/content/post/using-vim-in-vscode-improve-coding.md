---
publishDate: 2024-01-14T00:00:00Z
author: Jaime Villegas
title: How to Use Vim in VSCode to Improve Coding Experience and Performance
excerpt: Learn how to leverage Vim's powerful editing capabilities within VSCode. From basic navigation to advanced macros, discover how to boost your coding productivity with Vim keybindings.
image: https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80
category: Tutorials
tags:
  - vim
  - vscode
  - productivity
  - development tools
metadata:
  canonical: https://astrowind.vercel.app/using-vim-in-vscode-improve-coding
---

Vim's powerful editing capabilities combined with VSCode's modern features create an unbeatable development environment. In this guide, we'll explore how to effectively use Vim within VSCode to enhance your coding experience and boost productivity.

## Setting Up Vim in VSCode

1. **Install the VSCodeVim Extension**
   - Open VSCode
   - Press `Ctrl+P` to open the Quick Open dialog
   - Type `ext install vscodevim.vim`
   - Press Enter to install

2. **Basic Configuration**
Add these settings to your `settings.json`:

```json
{
  "vim.easymotion": true,
  "vim.incsearch": true,
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
  "vim.hlsearch": true,
  "vim.insertModeKeyBindings": [
    {
      "before": ["j", "j"],
      "after": ["<Esc>"]
    }
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<leader>", "d"],
      "after": ["d", "d"]
    },
    {
      "before": ["<C-n>"],
      "commands": [":nohl"]
    }
  ],
  "vim.leader": "<space>",
  "vim.handleKeys": {
    "<C-a>": false,
    "<C-f>": false
  }
}
```

## Essential Vim Commands in VSCode

### Basic Navigation

```plaintext
h - Move left
j - Move down
k - Move up
l - Move right
w - Move forward by word
b - Move backward by word
e - Move to end of word
0 - Move to start of line
$ - Move to end of line
gg - Go to first line
G - Go to last line
```

### Text Editing

```plaintext
i - Insert mode before cursor
a - Insert mode after cursor
A - Insert mode at end of line
o - Insert new line below
O - Insert new line above
x - Delete character
dd - Delete line
yy - Copy line
p - Paste after cursor
P - Paste before cursor
u - Undo
Ctrl+r - Redo
```

### Visual Mode

```plaintext
v - Enter visual mode
V - Enter visual line mode
Ctrl+v - Enter visual block mode
y - Copy selected text
d - Delete selected text
> - Indent selection
< - Unindent selection
```

## Advanced Vim Techniques

### Text Objects

```plaintext
ciw - Change inner word
ci" - Change inside quotes
ci( - Change inside parentheses
cit - Change inside HTML/XML tag
yi{ - Yank inside curly braces
da[ - Delete around square brackets
```

### Marks

```plaintext
ma - Set mark 'a'
'a - Jump to line of mark 'a'
`a - Jump to position of mark 'a'
:marks - List all marks
```

### Macros

```plaintext
qa - Start recording macro 'a'
q - Stop recording
@a - Play macro 'a'
@@ - Replay last macro
5@a - Play macro 'a' 5 times
```

## Custom VSCode-Vim Configurations

### Custom Key Mappings

```json
{
  "vim.normalModeKeyBindingsNonRecursive": [
    // File operations
    {
      "before": ["<leader>", "w"],
      "commands": [":w"]
    },
    {
      "before": ["<leader>", "q"],
      "commands": [":q"]
    },
    // Split management
    {
      "before": ["<leader>", "v"],
      "commands": [":vsplit"]
    },
    {
      "before": ["<leader>", "s"],
      "commands": [":split"]
    },
    // Quick navigation
    {
      "before": ["<leader>", "e"],
      "commands": ["workbench.view.explorer"]
    },
    {
      "before": ["<leader>", "f"],
      "commands": ["workbench.action.quickOpen"]
    }
  ]
}
```

### Integrating with VSCode Features

```json
{
  "vim.visualModeKeyBindingsNonRecursive": [
    // Format selection
    {
      "before": ["="],
      "commands": ["editor.action.formatSelection"]
    },
    // Comment toggle
    {
      "before": ["<leader>", "c"],
      "commands": ["editor.action.commentLine"]
    }
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    // Go to definition
    {
      "before": ["g", "d"],
      "commands": ["editor.action.revealDefinition"]
    },
    // Show references
    {
      "before": ["g", "r"],
      "commands": ["editor.action.goToReferences"]
    },
    // Rename symbol
    {
      "before": ["<leader>", "r", "n"],
      "commands": ["editor.action.rename"]
    }
  ]
}
```

## Vim Productivity Tips

### 1. Quick File Navigation

```plaintext
Ctrl+p - Quick file open
gd - Go to definition
gr - Go to references
gh - Show hover information
```

### 2. Multiple Cursors

```plaintext
gb - Add another cursor on the next word
gh - Start multiple cursor mode
```

### 3. EasyMotion Navigation

```plaintext
<leader><leader>w - Jump to word
<leader><leader>b - Jump backward
<leader><leader>e - Jump to word end
<leader><leader>j - Jump to line below
<leader><leader>k - Jump to line above
```

### 4. Search and Replace

```plaintext
/pattern - Search forward
?pattern - Search backward
n - Next occurrence
N - Previous occurrence
:%s/old/new/g - Replace all occurrences
:s/old/new/g - Replace in current line
```

## Advanced VSCode-Vim Integration

### 1. Custom Snippets with Vim

```json
{
  "vim.snippetDirectories": ["~/.vscode/snippets"],
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      "before": ["<leader>", "s"],
      "commands": ["editor.action.showSnippets"]
    }
  ]
}
```

### 2. Vim Status Bar Customization

```json
{
  "vim.statusBarColorControl": true,
  "vim.statusBarColors.normal": "#005f5f",
  "vim.statusBarColors.insert": "#5f0000",
  "vim.statusBarColors.visual": "#5f00af",
  "vim.statusBarColors.visualline": "#005f87",
  "vim.statusBarColors.visualblock": "#86592d"
}
```

### 3. Language-Specific Settings

```json
{
  "[javascript]": {
    "vim.normalModeKeyBindingsNonRecursive": [
      {
        "before": ["<leader>", "t"],
        "commands": ["javascript.goToTest"]
      }
    ]
  },
  "[python]": {
    "vim.normalModeKeyBindingsNonRecursive": [
      {
        "before": ["<leader>", "r"],
        "commands": ["python.execInTerminal"]
      }
    ]
  }
}
```

## Best Practices

1. **Start Gradually**
   - Begin with basic navigation (hjkl)
   - Learn one new command per day
   - Practice in a non-critical environment

2. **Use Vim Tutor**
   ```bash
   # In terminal
   vimtutor
   ```

3. **Create Muscle Memory**
   - Avoid using arrow keys
   - Force yourself to use Vim commands
   - Practice common operations repeatedly

4. **Customize Thoughtfully**
   - Start with default bindings
   - Add custom mappings as needed
   - Document your customizations

## Common Pitfalls to Avoid

1. **Overloading Key Bindings**
   - Keep mappings intuitive
   - Avoid conflicts with VSCode shortcuts
   - Document complex mappings

2. **Ignoring VSCode Features**
   - Combine Vim with VSCode's powerful features
   - Use integrated debugging
   - Leverage IntelliSense

3. **Not Using Text Objects**
   - Learn to think in text objects
   - Utilize powerful commands like `ci"`, `da{`
   - Practice with different delimiters

## Conclusion

Integrating Vim with VSCode can significantly improve your coding efficiency. Key takeaways:

- Start with basic navigation and gradually add more commands
- Customize your setup to match your workflow
- Combine Vim's editing power with VSCode's modern features
- Practice regularly to build muscle memory
- Use built-in tutorials and documentation

Remember that becoming proficient with Vim takes time. Focus on learning commands that benefit your daily workflow the most, and gradually expand your Vim vocabulary as you become more comfortable.

For more information, check out:
- [VSCodeVim Documentation](https://github.com/VSCodeVim/Vim#readme)
- [Vim Documentation](https://vimhelp.org/)
- VSCode's built-in Vim tutorial (Command Palette > "Open Vim Tutorial")
