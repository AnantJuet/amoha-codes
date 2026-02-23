import React from 'react';

const Home: React.FC = () => (
    <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

        {/* ================= Corollaries of Binomial Theorem ================= */}
        <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
            Corollaries of Binomial Theorem
        </h1>
        <p className="text-sm text-gray-500">Last Updated : 28 Jun, 2022</p>

        {/* Intro Paragraph */}
        <p className="leading-relaxed text-lg">
            The expression <strong>(a + b)<sup>n</sup></strong> represents the product of
            <strong> n</strong> identical factors of (a + b). Its expansion contains terms of the form
            <strong> a<sup>n−k</sup> b<sup>k</sup></strong>, where the coefficient of each term is
            <strong> C(n, k)</strong>.
        </p>

        <p className="leading-relaxed">
            The Binomial Theorem states:
        </p>

        <p className="leading-relaxed font-semibold">
            (a + b)<sup>n</sup> = Σ C(n, k) · a<sup>n−k</sup> b<sup>k</sup>, k = 0 to n
        </p>

        <p className="leading-relaxed">
            The total number of terms in the expansion is <strong>n + 1</strong>, and the degree of
            each term is <strong>n</strong>.
        </p>

        {/* Identity */}
        <p className="leading-relaxed">
            Since C(n, k) = C(n, n − k), the binomial coefficients are symmetric.
        </p>

        <h2 className="text-3xl font-bold  mt-10">Corollary 1</h2>
        <p className="leading-relaxed">
            Substituting a = 1 and b = 1:
        </p>

        <p className="font-semibold leading-relaxed">
            Σ C(n, k) = 2<sup>n</sup>
        </p>

        <h2 className="text-3xl font-bold  mt-10">Corollary 2</h2>
        <p className="leading-relaxed">
            Substituting a = 1 and b = −1:
        </p>

        <p className="font-semibold leading-relaxed">
            C(n, 0) − C(n, 1) + C(n, 2) − ... + (−1)<sup>n</sup>C(n, n) = 0
        </p>

        <h2 className="text-3xl font-bold  mt-10">Corollary 3</h2>
        <p className="leading-relaxed">
            Substituting a = 1 and b = 2:
        </p>

        <p className="font-semibold leading-relaxed">
            Σ [C(n, k) · 2<sup>k</sup>] = 3<sup>n</sup>
        </p>

        <h2 className="text-3xl font-bold  mt-10">Even and Odd Binomial Coefficients</h2>

        <p className="leading-relaxed">
            From corollary 1 and 2:
        </p>

        <p className="font-semibold leading-relaxed">
            C(n, 0) + C(n, 2) + C(n, 4) + ... = C(n, 1) + C(n, 3) + C(n, 5) + ... = 2<sup>n−1</sup>
        </p>

        <h2 className="text-3xl font-bold  mt-10">Pascal’s Triangle (First 4 Rows)</h2>

        <table className="table-auto border-collapse border border-gray-400 w-full text-left">
            <thead>
                <tr className="bg-gray-400 text-gray-900">
                    <th className="border border-gray-400 px-4 py-2">Expression</th>
                    <th className="border border-gray-400 px-4 py-2">Expanded Form</th>
                    <th className="border border-gray-400 px-4 py-2">Binomial Coefficients</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td className="border px-4 py-2">(a + b)<sup>0</sup></td>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">1</td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">(a + b)<sup>1</sup></td>
                    <td className="border px-4 py-2">a + b</td>
                    <td className="border px-4 py-2">1 1</td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">(a + b)<sup>2</sup></td>
                    <td className="border px-4 py-2">a² + 2ab + b²</td>
                    <td className="border px-4 py-2">1 2 1</td>
                </tr>

                <tr>
                    <td className="border px-4 py-2">(a + b)<sup>3</sup></td>
                    <td className="border px-4 py-2">a³ + 3a²b + 3ab² + b³</td>
                    <td className="border px-4 py-2">1 3 3 1</td>
                </tr>

            </tbody>
        </table>

    </div>
);

export default Home;
