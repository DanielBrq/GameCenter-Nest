"use client";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const Playground = () => {
  const [open, setOpen] = useState(true);
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
        <div className="flex gap-4">
          <label className="checkbox-base">
            <input type="checkbox" /> Acepto los términos
          </label>
          <label className="radio-base">
            <input type="radio" name="plan" /> Opción 1
          </label>
          <label className="radio-base">
            <input type="radio" name="plan" /> Opción 2
          </label>
        </div>
        <div>
          <label className="label-base">País</label>
          <select className="select-base">
            <option>Costa Rica</option>
            <option>México</option>
            <option>España</option>
          </select>
        </div>
        <div className="datepick">
          <input type="date" />
        </div>

        <button className="btn-primary w-20">Enviar</button>
      </section>

      {/* <!-- TARJETAS --> */}
      <section className="m-8">
        <h2 className="section-title">Tarjetas</h2>
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
          <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop transition className="modal-backdrop" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                  transition
                  className="modal-dialog-panel"
                >
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
                            action cannot be undone.
                            Are you sure you want to deactivate your account?
                            All of your data will be permanently removed. This
                            action cannot be undone.
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

      {/* <!-- DROPDOWN --> */}
      <section className="m-8">
        <h2 className="section-title">Dropdown</h2>
        <div className="dropdown-base">
          <button className="btn-secondary dropdown-trigger">Opciones ▼</button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Perfil</li>
            <li className="dropdown-item">Configuración</li>
            <li className="dropdown-item text-danger">Cerrar sesión</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
