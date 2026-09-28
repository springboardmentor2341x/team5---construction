import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Material {
  material_name: string;
  unit: string;
  status: string;
  material_id: number;
  created_at: string;
  updated_at: string;
}

export interface MaterialCreate {
  material_name: string;
  unit: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private http = inject(HttpClient);

  private apiUrl = 'https://buildtrack-backend-obv7.onrender.com/materials';
  //private apiUrl = '/api/materials';

  // GET /materials/
  getAllMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/`);
  }

  // POST /materials/
  createMaterial(material: MaterialCreate): Observable<Material> {
    return this.http.post<Material>(
      `${this.apiUrl}/`,
      material
    );
  }

  // DELETE /materials/{material_id}
  deleteMaterial(materialId: number): Observable<string | { message: string }> {
    return this.http.delete<string | { message: string }>(
      `${this.apiUrl}/${materialId}`
    );
  }
}