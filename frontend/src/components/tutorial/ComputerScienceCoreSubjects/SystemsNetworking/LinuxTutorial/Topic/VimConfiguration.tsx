import React from "react";

const VimConfiguration: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vim Configuration
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Vim can be extensively customized through the .vimrc configuration file.
      Settings can also be applied temporarily within a session.
    </p>

    <h2 className="text-3xl font-bold mt-8">The .vimrc File</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Location
~/.vimrc           # User configuration
/etc/vim/vimrc     # System-wide configuration

# Create/edit .vimrc
$ vim ~/.vimrc`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Settings</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`" Enable syntax highlighting
syntax on

" Show line numbers
set number
set relativenumber

" Indentation
set tabstop=4       " Tab width
set shiftwidth=4    " Indent width
set expandtab       " Use spaces instead of tabs
set autoindent      " Auto indent new lines
set smartindent     " Smart indentation

" Search settings
set hlsearch        " Highlight search results
set incsearch       " Incremental search
set ignorecase      " Case insensitive search
set smartcase       " Case sensitive if uppercase used`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Display Settings</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`" Visual settings
set cursorline      " Highlight current line
set showmatch       " Highlight matching brackets
set ruler           " Show cursor position
set showcmd         " Show partial commands
set showmode        " Show current mode

" Color scheme
colorscheme desert
set background=dark

" Line wrapping
set wrap
set linebreak       " Wrap at word boundaries

" Status line
set laststatus=2    " Always show status line`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Mappings</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`" Set leader key
let mapleader = ","

" Normal mode mappings
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
nnoremap <C-s> :w<CR>

" Insert mode mappings
inoremap jj <Esc>
inoremap <C-s> <Esc>:w<CR>a

" Visual mode mappings
vnoremap < <gv
vnoremap > >gv`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sample .vimrc</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`" Basic settings
syntax on
set number
set relativenumber
set tabstop=4
set shiftwidth=4
set expandtab
set autoindent
set smartindent
set hlsearch
set incsearch
set ignorecase
set smartcase
set cursorline
set showmatch
set ruler
set showcmd
set laststatus=2
set encoding=utf-8

" Key mappings
let mapleader = ","
nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
inoremap jj <Esc>

" Disable backup files
set nobackup
set noswapfile`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Settings</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Setting</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">set number</td>
            <td className="p-3 border">Show line numbers</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">syntax on</td>
            <td className="p-3 border">Enable syntax highlighting</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">set expandtab</td>
            <td className="p-3 border">Use spaces for tabs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">set hlsearch</td>
            <td className="p-3 border">Highlight search matches</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">set cursorline</td>
            <td className="p-3 border">Highlight current line</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>~/.vimrc stores your personal configuration</li>
        <li>Use set to enable options, set no* to disable</li>
        <li>Comments start with double quotes</li>
        <li>Key mappings customize shortcuts</li>
      </ul>
    </div>
  </div>
);

export default VimConfiguration;
