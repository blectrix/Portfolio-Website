x_vaddr    = 0x%08I64x
 Allocating address space
 PreAllocAddrSpace *AllocAddrSpace Loading into memory
 NaClAppLoadFile: Failed to make image pages writable. Error code 0x%x
 *NaClElfImageLoad Replacing gap between static text and (ro)data with shareable memory
 *MakeDynText Main executable segment hit validation cache and mapped in, skipping validation.
 Validating image
 *ValidateImg Initializing arch switcher
 Installing trampoline
 Installing springboard
 Applying memory protection
 NaClAppLoadFile done;  EndLoadFile argc >= 0 NULL != argv || 0 == argc NaClCreateMainThread: ptr_tbl_size cause size of argv / environment copy to overflow!?!
 setting stack to : %016I64x
 0 == (stack_ptr & NACL_STACK_ALIGN_MASK) stack_ptr not aligned: %016I64x
 copying arg %d  %p -> %p
 copying env %d  %p -> %p
 (char *) p == (char *) stack_ptr + ptr_tbl_size system stack ptr : %016I64x
   user stack ptr : %016I64x
 NaClWaitForMainThreadToExit: taking NaClApp lock
  waiting for exit status
  wakeup, nap->running %d, nap->exit_status %d
 NaClCreateAdditionalThread: could not allocate thread.  Returning EAGAIN per POSIX specs.
 NULL == nap->irt_nexe_desc ..\..\native_client\src\trusted\service_runtime\sel_main_common.c NaClVmmapEntryMake(0x%I64x,0x%I64x,0x%x,0x%x,0x%I64x,0x%I64x)
 entry: 0x%I64x
 NaClVmmapEntryFree(0x%08I64x): (0x%I64x,0x%I64x,0x%x,0x%x,0x%I64x,0x%I64x)
 NaClVmmapAdd(0x%08I64x, 0x%I64x, 0x%I64x, 0x%x, 0x%x, 0x%I64x, 0x%I64x)
 NaClVmmapAdd: could not allocate memory
 NaClVmmapChangeProt(0x%08I64x, 0x%I64x, 0x%I64x, 0x%x)
 Internal error: illegal O_ACCMODE
 No valid entries in VM map
 last < self->nvalid ..\..\native_client\src\trusted\service_runtime\sel_mem.c !self->vmentry[last]->removed NaClVmmapUpdate(0x%08I64x, 0x%I64x, 0x%I64x, 0x%x, 0x%x, %d, 0x%I64x, 0x%I64x)
 npages > 0 NaClVmmapCheckExistingMapping(0x%08I64x, 0x%I64x, 0x%I64x, 0x%x)
 key->page_num   = 0x%05I64x
 entry->page_num = 0x%05I64x
 entry->npages   = 0x%I64x
 VALIDATION FAILED: continuing anyway...
 VALIDATION FAILED.
 Run sel_ldr in debug mode to ignore validation failure.
 Run ncval <module-name> for validation error details.
 Entered NaClSysClock(%08I64x)
 NaClSysDup(0x%08I64x, %d)
 NaClSysDup(0x%08I64x, %d, %d)
 Entered NaClSysClose(0x%08I64x, %d)
 Invoking Close virtual function of object 0x%08I64x
 Entered NaClSysIsatty(0x%08I64x, %d)
 bad desc
 Entered NaClSysGetdents(0x%08I64x, %d, 0x%08I32x, %I64u[0x%I64x])
  illegal address for directory data
 Overflow in Getdents: return value is %I64x getdents returned %d bytes
 getdents result: %.*s
 getdents returned %d
 Entered NaClSysRead(0x%08I64x, %d, 0x%08I32x, %I32u[0x%I32x])
 read returned %I64d bytes
 read result: %.*s%s
 read returned %I64d
 Entered NaClSysWrite(0x%08I64x, %d, 0x%08I32x, %I32u[0x%I32x])
  ndp = %I64x
 In NaClSysWrite(%d, %.*s%s, %I32u)
 Entered NaClSysLseek(0x%08I64x, %d, 0x%08I32x, %d)
 offset 0x%08I64x
 NaClSysLseek: in/out ptr became invalid at copyout?
 Entered NaClSysFstat(0x%08I64x, %d, 0x%08I32x)
 Entered NaClSysFchdir(0x%08I64x, %d)
 Entered NaClSysFchmod(0x%08I64x, %d, 0x%x)
 Entered NaClSysFsync(0x%08I64x, %d)
 Entered NaClSysFdatasync(0x%08I64x, %d)
 Entered NaClSysFtruncate(0x%08I64x, %d, 0x%I32x)
 length 0x%08I64x
 NaClSysOpen(0x%08I64x, 0x%08I32x, 0x%x, 0x%x)
 Invalid open flags 0%o, ignoring extraneous bits
 IGNORING Invalid access mode bits 0%o
 NaClHostDirOpen(0x%08I64x, %s) returned %d
 Entered directory into open file table at %d
 NaClHostDescOpen(0x%08I64x,