/* Conversión WGS84 (lat/lon) -> MAGNA-SIRGAS Origen Nacional CTM12 (EPSG:9377)
   +proj=tmerc +lat_0=4 +lon_0=-73 +k=0.9992 +x_0=5000000 +y_0=2000000 +ellps=GRS80
   Fórmulas de Krüger (series de 6º orden), precisión sub-milimétrica en Colombia. */
(function (g) {
  var a = 6378137, f = 1 / 298.257222101, k0 = 0.9992;
  var lat0 = 4 * Math.PI / 180, lon0 = -73 * Math.PI / 180, FE = 5000000, FN = 2000000;
  var n = f / (2 - f), n2 = n * n, n3 = n2 * n, n4 = n3 * n, n5 = n4 * n, n6 = n5 * n;
  var A = a / (1 + n) * (1 + n2 / 4 + n4 / 64 + n6 / 256);
  var al = [0,
    n / 2 - 2 * n2 / 3 + 5 * n3 / 16 + 41 * n4 / 180 - 127 * n5 / 288 + 7891 * n6 / 37800,
    13 * n2 / 48 - 3 * n3 / 5 + 557 * n4 / 1440 + 281 * n5 / 630 - 1983433 * n6 / 1935360,
    61 * n3 / 240 - 103 * n4 / 140 + 15061 * n5 / 26880 + 167603 * n6 / 181440,
    49561 * n4 / 161280 - 179 * n5 / 168 + 6601661 * n6 / 7257600,
    34729 * n5 / 80640 - 3418889 * n6 / 1995840,
    212378941 * n6 / 319334400];
  var e = Math.sqrt(f * (2 - f));
  function raw(phi, lam) {
    var t = Math.sinh(Math.atanh(Math.sin(phi)) - e * Math.atanh(e * Math.sin(phi)));
    var xi = Math.atan2(t, Math.cos(lam)), eta = Math.atanh(Math.sin(lam) / Math.sqrt(1 + t * t));
    var x = eta, y = xi;
    for (var j = 1; j <= 6; j++) {
      y += al[j] * Math.sin(2 * j * xi) * Math.cosh(2 * j * eta);
      x += al[j] * Math.cos(2 * j * xi) * Math.sinh(2 * j * eta);
    }
    return [k0 * A * x, k0 * A * y];
  }
  var M0 = raw(lat0, 0)[1];
  g.toCTM12 = function (lat, lon) {
    var r = raw(lat * Math.PI / 180, lon * Math.PI / 180 - lon0);
    return [FE + r[0], FN + (r[1] - M0)];
  };
})(typeof window !== "undefined" ? window : globalThis);
