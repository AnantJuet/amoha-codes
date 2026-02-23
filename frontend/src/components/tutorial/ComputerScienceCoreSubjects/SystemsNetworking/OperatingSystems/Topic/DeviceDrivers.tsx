import React from 'react';

const DeviceDrivers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Device Drivers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A device driver is software that enables the operating system and applications to
      communicate with hardware devices. It acts as a translator between the hardware-specific
      operations of a device and the standardized interface expected by the OS, hiding the
      complexity of hardware from higher-level software.
    </p>

    {/* Device Driver Role */}
    <h2 className="text-3xl font-bold mt-8">Role of Device Drivers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Device Driver in the System Architecture:

┌─────────────────────────────────────────────────────────────────────────┐
│                          User Space                                     │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                      Application                                 │   │
│  │                   (e.g., Media Player)                          │   │
│  │                                                                 │   │
│  │         write(fd, audio_data, size);                            │   │
│  └──────────────────────────┬──────────────────────────────────────┘   │
│                             │ System Call                              │
└─────────────────────────────┼───────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          Kernel Space                                   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    Virtual File System (VFS)                    │   │
│  │                    Provides unified interface                   │   │
│  └──────────────────────────┬──────────────────────────────────────┘   │
│                             │                                           │
│                             ▼                                           │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                     DEVICE DRIVER                               │   │
│  │  ┌───────────────────────────────────────────────────────────┐ │   │
│  │  │  • Implements standard interface (open, read, write...)   │ │   │
│  │  │  • Knows device-specific details                          │ │   │
│  │  │  • Manages device state and buffers                       │ │   │
│  │  │  • Handles interrupts from device                         │ │   │
│  │  │  • Controls device through registers                      │ │   │
│  │  └───────────────────────────────────────────────────────────┘ │   │
│  └──────────────────────────┬──────────────────────────────────────┘   │
│                             │                                           │
└─────────────────────────────┼───────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          Hardware                                       │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    Device Controller                            │   │
│  │                        (Registers)                              │   │
│  └──────────────────────────┬──────────────────────────────────────┘   │
│                             │                                           │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                    Physical Device                              │   │
│  │                    (Sound Card, Disk)                           │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Types of Device Drivers */}
    <h2 className="text-3xl font-bold mt-8">Types of Device Drivers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
            <th className="p-3 border">Interface</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Character Drivers</td>
            <td className="p-3 border">Handle data one character at a time</td>
            <td className="p-3 border">Keyboard, serial ports, terminals</td>
            <td className="p-3 border">/dev/tty, /dev/console</td>
          </tr>
          <tr>
            <td className="p-3 border">Block Drivers</td>
            <td className="p-3 border">Handle data in fixed-size blocks</td>
            <td className="p-3 border">Hard disks, SSDs, USB drives</td>
            <td className="p-3 border">/dev/sda, /dev/nvme0n1</td>
          </tr>
          <tr>
            <td className="p-3 border">Network Drivers</td>
            <td className="p-3 border">Handle network packets</td>
            <td className="p-3 border">Ethernet, WiFi adapters</td>
            <td className="p-3 border">eth0, wlan0 (socket API)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Driver Architecture */}
    <h2 className="text-3xl font-bold mt-8">Device Driver Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Typical Device Driver Structure:

┌─────────────────────────────────────────────────────────────────────────┐
│                           Device Driver                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  ENTRY POINTS (Interface to OS/Applications)                      │ │
│  │                                                                   │ │
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │ │
│  │  │   open()    │ │   close()   │ │   read()    │ │   write()   │ │ │
│  │  │  Init device│ │Release device│ │Read from dev│ │Write to dev │ │ │
│  │  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │ │
│  │                                                                   │ │
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │ │
│  │  │   ioctl()   │ │   mmap()    │ │   poll()    │ │   llseek()  │ │ │
│  │  │ Control ops │ │ Memory map  │ │ Wait for evt│ │ Seek position│ │ │
│  │  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                    │                                    │
│                                    ▼                                    │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  INTERNAL FUNCTIONS                                               │ │
│  │                                                                   │ │
│  │  ┌─────────────────────┐  ┌─────────────────────────────────────┐│ │
│  │  │  Initialization     │  │  Interrupt Handler (ISR)            ││ │
│  │  │  - Detect hardware  │  │  - Handle device interrupts         ││ │
│  │  │  - Allocate resources│  │  - Process completed I/O            ││ │
│  │  │  - Register driver  │  │  - Wake up waiting processes        ││ │
│  │  └─────────────────────┘  └─────────────────────────────────────┘│ │
│  │                                                                   │ │
│  │  ┌─────────────────────┐  ┌─────────────────────────────────────┐│ │
│  │  │  Buffer Management  │  │  DMA Setup/Handling                 ││ │
│  │  │  - Manage I/O queues│  │  - Configure DMA transfers          ││ │
│  │  │  - Cache data       │  │  - Handle scatter-gather lists      ││ │
│  │  └─────────────────────┘  └─────────────────────────────────────┘│ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                    │                                    │
│                                    ▼                                    │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  HARDWARE ACCESS                                                  │ │
│  │                                                                   │ │
│  │  ┌─────────────────────────────────────────────────────────────┐ │ │
│  │  │  Register Access Functions                                  │ │ │
│  │  │  - inb(), outb()  - I/O port access                         │ │ │
│  │  │  - readl(), writel() - Memory-mapped I/O                    │ │ │
│  │  │  - ioread32(), iowrite32() - Portable I/O                   │ │ │
│  │  └─────────────────────────────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Driver Functions */}
    <h2 className="text-3xl font-bold mt-8">Key Driver Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">When Called</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">init/probe</td>
            <td className="p-3 border">Initialize driver, detect hardware</td>
            <td className="p-3 border">Driver load, device detection</td>
          </tr>
          <tr>
            <td className="p-3 border">open</td>
            <td className="p-3 border">Prepare device for use</td>
            <td className="p-3 border">Application opens device file</td>
          </tr>
          <tr>
            <td className="p-3 border">read</td>
            <td className="p-3 border">Transfer data from device to user</td>
            <td className="p-3 border">Application reads from device</td>
          </tr>
          <tr>
            <td className="p-3 border">write</td>
            <td className="p-3 border">Transfer data from user to device</td>
            <td className="p-3 border">Application writes to device</td>
          </tr>
          <tr>
            <td className="p-3 border">ioctl</td>
            <td className="p-3 border">Device-specific control operations</td>
            <td className="p-3 border">Application needs special control</td>
          </tr>
          <tr>
            <td className="p-3 border">interrupt handler</td>
            <td className="p-3 border">Handle hardware interrupts</td>
            <td className="p-3 border">Device signals completion/event</td>
          </tr>
          <tr>
            <td className="p-3 border">close/release</td>
            <td className="p-3 border">Release device resources</td>
            <td className="p-3 border">Application closes device file</td>
          </tr>
          <tr>
            <td className="p-3 border">exit/remove</td>
            <td className="p-3 border">Clean up and unload driver</td>
            <td className="p-3 border">Driver unload, device removal</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Simple Driver Example */}
    <h2 className="text-3xl font-bold mt-8">Simple Character Driver Example (Linux)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
// Simplified Linux Character Device Driver

#include <linux/module.h>
#include <linux/fs.h>
#include <linux/cdev.h>
#include <linux/uaccess.h>

#define DEVICE_NAME "mydevice"
#define BUFFER_SIZE 1024

static char device_buffer[BUFFER_SIZE];
static int buffer_pointer = 0;
static dev_t dev_number;
static struct cdev my_cdev;

// Called when device file is opened
static int device_open(struct inode *inode, struct file *file) {
    printk(KERN_INFO "Device opened\\n");
    return 0;  // Success
}

// Called when device file is closed
static int device_release(struct inode *inode, struct file *file) {
    printk(KERN_INFO "Device closed\\n");
    return 0;
}

// Called when reading from device
static ssize_t device_read(struct file *file, char __user *user_buffer,
                           size_t count, loff_t *offset) {
    int bytes_to_read = min(count, (size_t)buffer_pointer);

    if (bytes_to_read == 0)
        return 0;  // No data available

    // Copy data from kernel buffer to user space
    if (copy_to_user(user_buffer, device_buffer, bytes_to_read))
        return -EFAULT;

    buffer_pointer = 0;  // Reset buffer
    return bytes_to_read;
}

// Called when writing to device
static ssize_t device_write(struct file *file, const char __user *user_buffer,
                            size_t count, loff_t *offset) {
    int bytes_to_write = min(count, (size_t)BUFFER_SIZE);

    // Copy data from user space to kernel buffer
    if (copy_from_user(device_buffer, user_buffer, bytes_to_write))
        return -EFAULT;

    buffer_pointer = bytes_to_write;
    printk(KERN_INFO "Received %d bytes\\n", bytes_to_write);
    return bytes_to_write;
}

// File operations structure - links functions to system calls
static struct file_operations fops = {
    .owner = THIS_MODULE,
    .open = device_open,
    .release = device_release,
    .read = device_read,
    .write = device_write,
};

// Module initialization - called when driver loads
static int __init driver_init(void) {
    // Allocate device number
    alloc_chrdev_region(&dev_number, 0, 1, DEVICE_NAME);

    // Initialize and add character device
    cdev_init(&my_cdev, &fops);
    cdev_add(&my_cdev, dev_number, 1);

    printk(KERN_INFO "Driver loaded. Major: %d\\n", MAJOR(dev_number));
    return 0;
}

// Module cleanup - called when driver unloads
static void __exit driver_exit(void) {
    cdev_del(&my_cdev);
    unregister_chrdev_region(dev_number, 1);
    printk(KERN_INFO "Driver unloaded\\n");
}

module_init(driver_init);
module_exit(driver_exit);

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Example");
MODULE_DESCRIPTION("Simple character device driver");
`}
      </pre>
    </div>

    {/* Driver Loading and Execution */}
    <h2 className="text-3xl font-bold mt-8">Driver Loading and Execution Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Driver Lifecycle:

┌─────────────────────────────────────────────────────────────────────────┐
│                        1. DRIVER LOADING                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   $ insmod mydriver.ko        (or modprobe, or built-in)               │
│         │                                                               │
│         ▼                                                               │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │  module_init() called                                           │  │
│   │  - Allocate resources (memory, IRQs, I/O ports)                │  │
│   │  - Initialize hardware                                         │  │
│   │  - Register with kernel subsystem (chardev, block, network)    │  │
│   │  - Create device nodes (/dev/xxx)                              │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        2. DRIVER IN USE                                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   Application: fd = open("/dev/mydevice", O_RDWR);                     │
│         │                                                               │
│         ▼                                                               │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │  VFS → driver's open() function                                 │  │
│   │  - Increment usage count                                        │  │
│   │  - Initialize per-file state                                    │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│         │                                                               │
│         ▼                                                               │
│   Application: bytes = read(fd, buffer, size);                         │
│         │                                                               │
│         ▼                                                               │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │  VFS → driver's read() function                                 │  │
│   │  - Check device status                                          │  │
│   │  - Read data from hardware (or wait for it)                    │  │
│   │  - Copy data to user buffer                                    │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│         │                                                               │
│         ▼                                                               │
│   [Interrupt occurs] → driver's interrupt handler                      │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │  - Acknowledge interrupt                                        │  │
│   │  - Read data from device                                        │  │
│   │  - Wake up waiting processes                                    │  │
│   │  - Schedule deferred work if needed                             │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│         │                                                               │
│         ▼                                                               │
│   Application: close(fd);                                              │
│         │                                                               │
│         ▼                                                               │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │  VFS → driver's release() function                              │  │
│   │  - Decrement usage count                                        │  │
│   │  - Clean up per-file state                                      │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        3. DRIVER UNLOADING                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   $ rmmod mydriver                                                     │
│         │                                                               │
│         ▼                                                               │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │  module_exit() called                                           │  │
│   │  - Unregister from kernel subsystem                            │  │
│   │  - Free IRQs, I/O ports, memory                                │  │
│   │  - Remove device nodes                                         │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Device drivers bridge the gap between OS and hardware devices</li>
      <li>They implement standard interfaces (open, read, write, close, ioctl)</li>
      <li>Types include character, block, and network drivers</li>
      <li>Drivers run in kernel space with full hardware access privileges</li>
      <li>They handle interrupts and may use DMA for efficient data transfer</li>
      <li>Modern drivers are often loadable kernel modules (LKMs)</li>
      <li>Writing drivers requires understanding both hardware and OS internals</li>
      <li>Buggy drivers can crash the entire system (kernel panics, BSODs)</li>
    </ul>
  </div>
);

export default DeviceDrivers;
