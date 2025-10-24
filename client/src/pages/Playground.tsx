"use client";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export const Playground = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-base font-sans p-8 space-y-12 background">
      <p className="bg-linear-to-r from-red-500 to-fuchsia-500 bg-clip-text font-extrabold text-transparent text-6xl">
        Game Center
      </p>
      {/* <!-- TIPOGRAFÍA --> */}
      <section>
        <div className="m-8">
          <h1 className="">Encabezado H1</h1>
          <h2 className="">Encabezado H2</h2>
          <h3 className="">Encabezado H3</h3>
          <h4 className="">Encabezado H4</h4>
          <h5 className="">Encabezado H5</h5>
          <h6 className="">Encabezado H6</h6>

          <p className="text-gray-50">Texto pequeño.</p>
          <a href="#" className="text-indigo-600">
            Enlace principal
          </a>
        </div>
      </section>

      {/* <!-- BOTONES --> */}
      <section className="m-8">
        <h2 className="section-title">Botones</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {/* <button className="btn-test border-amber-300">Test</button> */}
            <button className="btn-primary">Primario</button>
            <button className="btn-secondary">Secundario</button>
            <button className="btn-success">Success</button>
            <button className="btn-warning">Warning</button>
            <button className="btn-danger">Danger</button>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary-outline">Primario</button>
            <button className="btn-secondary-outline">Secundario</button>
            <button className="btn-success-outline">Success</button>
            <button className="btn-warning-outline">Warning</button>
            <button className="btn-danger-outline">Danger</button>
          </div>
        </div>
      </section>

      {/* badge */}
      <section className="m-8">
        <span className="badge-success mr-5">Approved</span>
        <span className="badge-primary mr-5">Submitted</span>
        <span className="badge-warning mr-5">Pending</span>
        <span className="badge-danger mr-5">Denied</span>
      </section>

      {/* <!-- INPUTS Y FORMULARIOS --> */}
      <section className="m-8">
        <h2 className="section-title">Inputs y Formularios</h2>
        <div>
          <label className="input-text mr-5">Nombre</label>
          <input
            type="text"
            className="text-field"
            placeholder="Escribe tu nombre"
            required
          />
        </div>
        <div>
          <label className="label-base mr-5">Correo</label>
          <input
            type="email"
            className="text-field"
            placeholder="correo@ejemplo.com"
          />
        </div>
        <div>
          <label className="mr-5">Contraseña</label>
          <input
            type="password"
            className="text-field text-field-valid"
            placeholder="********"
          />
        </div>
        <div className="flex gap-2 flex-col-reverse my-2">
          <label className="checkbox-base">
            <input className="" type="checkbox" /> Acepto los términos
          </label>

          <label className="radio-base">
            <input type="radio" name="plan" /> Opción 1
          </label>

          <label className="radio-base">
            <input className="" type="radio" name="plan" /> Opción 2
          </label>
        </div>

        <div className="my-2"></div>
        <div className="my-2">
          <input type="date" />
        </div>
      </section>

      {/* <!-- DROPDOWN --> */}
      <section className="m-8">
        <h2 className="section-title">Dropdown</h2>
        <Menu as="div" className="relative inline-block">
          <MenuButton className="btn-secondary-outline inline-flex w-full justify-center gap-x-1.5">
            Opciones
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
          </MenuButton>

          <MenuItems
            transition
            className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-900 backdrop-blur-sm outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Edit
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Duplicate
                </a>
              </MenuItem>
            </div>
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Archive
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Move
                </a>
              </MenuItem>
            </div>
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Share
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Add to favorites
                </a>
              </MenuItem>
            </div>
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                >
                  Delete
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </section>

      {/* <!-- TARJETAS --> */}
      <section className="m-8">
        <h2 className="section-title my-2">Tarjetas</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="card-base card">
            <h3 className="card-title">Título de tarjeta</h3>
            <p className="text-gray-400">
              Texto de ejemplo dentro de una tarjeta base.
            </p>
            <button className="btn-primary mt-2">Acción</button>
          </div>
          <div className="card-base card">
            <h3 className="card-title">Título de tarjeta</h3>
            <p className="text-gray-400">
              Texto de ejemplo dentro de una tarjeta base.
            </p>
            <button className="btn-success mt-2">Acción</button>
          </div>
          <div className="card-base card">
            <h3 className="text-white">Título de tarjeta</h3>
            <p className="text-gray-400">
              Texto de ejemplo dentro de una tarjeta base.
            </p>
            <button className="btn-danger mt-2">Acción</button>
          </div>
        </div>
      </section>

      {/* <!-- MODAL --> */}
      <section className="m-8">
        <h2 className="section-title">Modal</h2>
        <div className="Modal">
          <button onClick={() => setOpen(true)} className="btn-primary-outline">
            Abrir Modal
          </button>
          <Dialog open={open} onClose={setOpen} className="absolute z-10">
            <DialogBackdrop transition className="modal-backdrop" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel transition className="modal-dialog-panel">
                  <div className="bg-gray-900/40 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                        <ExclamationTriangleIcon
                          aria-hidden="true"
                          className="size-6 text-red-400"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <DialogTitle
                          as="h3"
                          className="text-base font-semibold text-white"
                        >
                          Deactivar Usuario
                        </DialogTitle>
                        <div className="mt-2">
                          <p className="text-sm text-gray-400">
                            Are you sure you want to deactivate your account?
                            All of your data will be permanently removed. This
                            action cannot be undone. Are you sure you want to
                            deactivate your account? All of your data will be
                            permanently removed. This action cannot be undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700/12 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="btn-success-outline ms-2"
                    >
                      Activar
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="btn-danger-outline ms-2"
                    >
                      Deactivar
                    </button>
                    <button
                      type="button"
                      data-autofocus
                      onClick={() => setOpen(false)}
                      className="btn-secondary-outline"
                    >
                      Cancelar
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>
      </section>
      {/* tablas */}
      <section>
        <table className="w-full">
          <thead>
            <tr>
              <th className="table-header">
                <p>Columna</p>
              </th>
              <th className="table-header">Artist</th>
              <th className="table-header">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td>
                <p>The Sliding Mr. Bones (Next Stop, Pottersville)</p>
              </td>
              <td>
                <p>Malcolm Lockyer</p>
              </td>
              <td>
                <p>1961</p>
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <p>Witchy Woman</p>
              </td>
              <td>
                <p>The Eagles</p>
              </td>
              <td>
                <p>1972</p>
              </td>
            </tr>
            <tr className="table-row">
              <td>
                <p>Shining Star</p>
              </td>
              <td>
                <p>Earth, Wind, and Fire</p>
              </td>
              <td>
                <p>1975</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
