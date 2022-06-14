---
---

# 🐍 Python

export const Alpha = ({children}) => (
<span style={{
	backgroundColor: '#68B1D0',
	fontFamily: 'monospace',
	borderRadius: '7px',
	color: '#fff',
	padding: '0.3rem',
}}>{children}</span>);

## Availability

Our **`lightonmuse`** Python bindings <Alpha>alpha</Alpha> can be installed from PyPi or from the
**[GitHub repository](https://github.com/lightonai/lightonmuse)**:

```bash title="Installing Python bindings with pip"
pip install lightonmuse
```

```bash title="Installing Python bindings from source with pip"
pip install git+https://github.com/lightonai/lightonmuse
```

:::info ⚗️ Python bindings are in **alpha**
We do not guarantee that the features offered will be stable, and future updates may introduce breaking changes. **We do
not recommend you use the Python bindings in production**, though they are excellent for experimenting with the API.
:::

## Getting started

You can get a quick idea of what is possible by browsing the
**[demo notebook](https://github.com/lightonai/lightonmuse/blob/master/examples/demo_notebook.ipynb)**.

## Documentation

The Python bindings provides classes with the same name and parameters of all Muse endpoints.
The [README](https://github.com/lightonai/lightonmuse/blob/master/README.md) provides an overview of all the functionalities available.
